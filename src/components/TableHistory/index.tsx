import { useEffect, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDateHistory } from "../../utils/formatDateHistory";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import style from "./style.module.css";

export function TableHistory() {
  const { state } = useTaskContext();

  const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    }
  );

  useEffect(() => {
    setSortTaskOptions((prevState) => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  function handleSortTaks({ field }: Pick<SortTasksOptions, "field">) {
    const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";
    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  return (
    <div className={style.responsiveTable}>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => handleSortTaks({ field: "name" })}
              className={style.thsort}>
              Tarefa ↕
            </th>
            <th
              onClick={() => handleSortTaks({ field: "duration" })}
              className={style.thsort}>
              Duração ↕
            </th>
            <th
              onClick={() => handleSortTaks({ field: "startDate" })}
              className={style.thsort}>
              Data ↕
            </th>
            <th>Status</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {sortTasksOptions.tasks.map((task) => {
            const TypeTask = {
              workTime: "Foco",
              restTime: "Pausa curta",
              longrestTime: "Pausa longa",
            };

            return (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.duration} min</td>
                <td>{formatDateHistory(task.startDate)}</td>
                <td>{getTaskStatus(task, state.activeTask)}</td>
                <td>{TypeTask[task.type]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
