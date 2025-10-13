import { TrashIcon } from "lucide-react";
import { ButtonPlay } from "../../components/ButtonPlay";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplete } from "../../templetes/MainTempletes";

import style from "./styles.module.css";

export function History() {
  return (
    <MainTemplete>
      <Container>
        <Heading>
          <div>Histórico</div>
          <div className={style.buttonplay}>
            <ButtonPlay icon={<TrashIcon />}></ButtonPlay>
          </div>
        </Heading>
      </Container>

      <Container>
        <div className="responsiveTable">asdjfgjlkasnfjlka</div>
      </Container>
    </MainTemplete>
  );
}
