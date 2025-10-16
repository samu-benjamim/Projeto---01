import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { ButtonPlay } from "../ButtonPlay";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";
import { CycleDescription } from "../CycleDescription/CycleDescription";
import { showMassage } from "../../adapters/showMessage";

export function MainForm() {
  const { state, dispatch } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const taskNameInput = useRef<HTMLInputElement>(null);

  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      showMassage.warn("Digite o nome da atividade");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });
    showMassage.success("Atividade iniciada");
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
    if (!confirm("Tem certeza que deseja interromper a sua Atividade?")) return;
    showMassage.error("Você interrompeu o ciclo!");
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
            disabled={!!state.activeTask}
            defaultValue={lastTaskName}></Input>
          <div className="formRow">
            <CycleDescription />
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
              key="submit"
            />
          ) : (
            <ButtonPlay
              icon={<StopCircleIcon />}
              aria-label="Parar atividade atual"
              title="Parar atividade atual"
              id="playtime"
              type="button"
              color="red"
              onClick={handleInterruptTask}
              key="button"
            />
          )}
        </div>
      </form>
    </>
  );
}
