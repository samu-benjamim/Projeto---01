import { useEffect, useReducer, useRef } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initalTaskState";
import { taskReducer } from "./TaskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionsTypes } from "./taskActions";
import { loadAudio } from "../../utils/loadAudio";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  let playBeepRef = useRef<ReturnType<typeof loadAudio> | null>(null);

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
    if (!state.activeTask) {
      console.log("Worker Terminado por falta de activeTask");
      worker.terminate();
    }
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
