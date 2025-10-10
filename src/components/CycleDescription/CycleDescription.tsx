import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function CycleDescription() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const cycleDescriptionTaskActive = {
    workTime: (
      <span>
        <strong>Focar</strong> por <strong>{state.config.workTime} min</strong>
      </span>
    ),
    restTime: (
      <span>
        <strong>Pausa</strong> de <strong>{state.config.restTime} min</strong>
      </span>
    ),
    longrestTime: (
      <span>
        <strong>Pausa longa</strong>{" "}
      </span>
    ),
  };

  const cycleDescriptionNoTaskActive = {
    workTime: (
      <span>
        Próximo <strong>foco</strong> é de{" "}
        <strong>{state.config.workTime} min</strong>
      </span>
    ),
    restTime: (
      <span>
        Próxima <strong>pausa</strong> é de{" "}
        <strong>{state.config.restTime} min</strong>
      </span>
    ),
    longrestTime: (
      <span>
        Próximo ciclo é de <strong>pausa longa</strong>
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && cycleDescriptionTaskActive[state.activeTask.type]}
      {!state.activeTask && cycleDescriptionNoTaskActive[nextCycleType]}
    </>
  );
}
