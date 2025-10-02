import { Container } from "./components/Container";
import { ButtonMenu } from "./components/ButtonMenu";
import { Logo } from "./components/Logo";

import "./styles/thema.css";
import "./styles/global.css";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";
import { Cycles } from "./components/Cycles";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <ButtonMenu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input
              labeltext="Atividade:"
              id="inputtask"
              type="text"
              placeholder="Digite a atividade aqui"></Input>
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <button>Iniciar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
