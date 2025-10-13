import { useEffect, useReducer, useRef } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initalTaskState";
import { taskReducer } from "./TaskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionsTypes } from "./taskActions";
import { loadAudio } from "../../utils/loadAudio";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem("state");

    if (storageState === null) return initialTaskState;
    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: "00:00",
    };
  });

  const playBeepRef = useRef<ReturnType<typeof loadAudio> | null>(null);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        console.log("tocando audio");
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionsTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionsTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
    if (!state.activeTask) {
      console.log("Worker Terminado por falta de activeTask");
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaining} - Pomus Focus`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      console.log("carregando audio");
      playBeepRef.current = loadAudio();
    } else {
      console.log("zerando audio");
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
