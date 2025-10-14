import { TrashIcon } from "lucide-react";
import { ButtonPlay } from "../../components/ButtonPlay";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplete } from "../../templetes/MainTempletes";

import style from "./styles.module.css";
import { TableHistory } from "../../components/TableHistory";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";

export function History() {
  const { dispatch, state } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  function hendleResetHIsttory() {
    if (!confirm("Tem certeza que deseja excluir todo o histórico")) return;

    dispatch({ type: TaskActionsTypes.RESET_STATE });
  }
  return (
    <MainTemplete>
      <Container>
        <Heading>
          <span className="head">Histórico</span>
          <span className={style.buttonplay}>
            {hasTasks && (
              <ButtonPlay
                onClick={hendleResetHIsttory}
                icon={<TrashIcon />}
                aria-label="Apagar histórico"
                title="Apagar histórico"
                className={style.buttonDefault}></ButtonPlay>
            )}
          </span>
        </Heading>
      </Container>

      {hasTasks && (
        <Container>
          <TableHistory />
        </Container>
      )}
      {!hasTasks && (
        <Container>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Ainda não existem atividades criadas.
          </p>
        </Container>
      )}
    </MainTemplete>
  );
}
