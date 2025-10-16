import { useEffect } from "react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Paragraph } from "../../components/Paragraph";
import { SettingsInput } from "../../components/SettingsInput";
import { MainTemplete } from "../../templetes/MainTempletes";

export function Setting() {
  useEffect(() => {
    document.title = "Configurações - PomusFocus";
  });
  return (
    <MainTemplete>
      <Container>
        <Heading>Configurações:</Heading>
      </Container>
      <Container>
        <Paragraph> Ajuste os períodos do Pomodoro. </Paragraph>
      </Container>
      <Container>
        <SettingsInput></SettingsInput>
      </Container>
    </MainTemplete>
  );
}
