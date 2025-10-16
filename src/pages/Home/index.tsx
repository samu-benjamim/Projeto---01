import { useEffect } from "react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/Mainform";
import { MainTemplete } from "../../templetes/MainTempletes";

export function Home() {
  useEffect(() => {
    document.title = "PomusFocus";
  });
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
