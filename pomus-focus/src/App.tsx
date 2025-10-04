import { Container } from "./components/Container";
import { ButtonMenu } from "./components/ButtonMenu";
import { Logo } from "./components/Logo";

import "./styles/thema.css";
import "./styles/global.css";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";
import { Cycles } from "./components/Cycles";
import { ButtonPlay } from "./components/ButtonPlay";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

export function App() {
  /*const [numero, setNumber] = useState(() => {
    return 0; // usando uma função para atribuir o valor no userState ajuda a economizar processamento do codigo executando apenas uma vez
  }); // quando precisar usar uma variavel que irá ser alterada usar userState que restona uma array [valor, configuração do valor]

  function handleClick() {
    setNumber((prevState) => prevState + 1); //  sempre que for alterar uma variavel que está nbo userState usar uma função
  } 
        <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumentar</button>  
  */
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
        </form>
      </Container>
      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Container>
        <Cycles />
      </Container>
      <Container>
        <ButtonPlay
          icon={<PlayCircleIcon />}
          id="playtime"
          type="button"
          color="green"
        />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
