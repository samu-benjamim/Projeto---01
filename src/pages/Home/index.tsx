import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/Mainform";
import { MainTemplete } from "../../templetes/MainTempletes";

export function Home() {
  return (
    <MainTemplete>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplete>
  );
}
