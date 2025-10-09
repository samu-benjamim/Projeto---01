import { GenericHtml } from "../../components/GenericHtml"
import { Heading } from "../../components/Heading"
import { MainTemplete } from "../../templetes/MainTempletes"

export function NotFound() {
  return (
    <MainTemplete>
      <GenericHtml>
        <Heading>404 - Ciclo não encontrado ⏱️</Heading>
        <p>
          Opa! Parece que o ciclo que você tentou acessar se perdeu no meio da
          concentração. Talvez ele tenha entrado em modo{" "}
          <strong>pausa longa</strong> ou simplesmente decidiu focar em outra
          dimensão do tempo. 🌀
        </p>
        <p>
          Mas calma, você não perdeu o foco (ainda). Dá pra voltar em segurança
          para a <a href="/">página principal</a> ou{" "}
          <a href="/history">ver seu histórico</a> — ou, se preferir, aproveite
          pra dar uma <strong>pausa curta</strong> antes de recomeçar o próximo
          ciclo. 🧘‍♂️
        </p>
        <p>
          Se você acha que essa página deveria existir (ou que alguém clicou no
          timer errado), entre em contato com a equipe do Pomus Focus.
          Prometemos não interromper seu momento de foco. 😅
        </p>
        <p>
          Enquanto isso, uma reflexão: “Se um ciclo termina antes de começar,
          será que ele realmente existiu?” 🤔💭
        </p>
      </GenericHtml>
    </MainTemplete>
  )
}
