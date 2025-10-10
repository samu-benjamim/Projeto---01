import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Paragraph } from "../../components/Paragraph";
import { SettingsInput } from "../../components/SettingsInput";
import { MainTemplete } from "../../templetes/MainTempletes";

export function Setting() {
  return (
    <MainTemplete>
      <Container>
        <Heading>Configuração:</Heading>
      </Container>
      <Container>
        <Paragraph> Configuração dos periodos do Pomodorio. </Paragraph>
      </Container>
      <Container>
        <SettingsInput></SettingsInput>
      </Container>
    </MainTemplete>
  );
}
