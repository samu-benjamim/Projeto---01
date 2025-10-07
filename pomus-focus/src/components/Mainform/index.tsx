import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { ButtonPlay } from "../ButtonPlay";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { TaskContext } from "../../contexts/TaskContext/TaskContext";

export function MainForm() {
  const { state, setState } = useTaskContext();
  //  const [taskName, setTaskName] = useState("");

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      alert("Digite o nome da atividade");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      nome: taskName,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <>
      <form className="form" action="" onSubmit={handleCreateNewTask}>
        <div className="formRow">
          <Input
            labeltext="Atividade:"
            ref={taskNameInput}
            id="inputtask"
            type="text"
            placeholder="Digite a atividade aqui"
            disabled={!!state.activeTask}></Input>
          <div className="formRow">
            <p>O próximo interevalor é de 25 min</p>
          </div>
          {state.currentCycle > 0 && <Cycles />}
          {!state.activeTask ? (
            <ButtonPlay
              icon={<PlayCircleIcon />}
              aria-label="Iniciar nova atividade"
              title="Iniciar nova atividade"
              id="playtime"
              type="submit"
              color="green"
            />
          ) : (
            <ButtonPlay
              icon={<StopCircleIcon />}
              aria-label="Parar atividade atual"
              title="Parar atividade atual"
              id="playtime"
              type="button"
              color="red"
            />
          )}
        </div>
      </form>
    </>
  );
}
