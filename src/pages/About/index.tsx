import { GenericHtml } from "../../components/GenericHtml";
import { MainTemplete } from "../../templetes/MainTempletes";
import { RouteLink } from "../../components/RouterLink";
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    document.title = "Entenda a Método Pomodoro - PomusFocus";
  });

  return (
    <MainTemplete>
      <GenericHtml>
        <h1>🍅 Método Pomodoro: o segredo do foco inteligente</h1>
        <p>
          O método Pomodoro é uma técnica simples e poderosa criada por
          <strong>Francesco Cirillo</strong> para aumentar a produtividade.
        </p>
        <p>
          A ideia é dividir o tempo de trabalho em blocos curtos de foco
          intenso, intercalados com pausas estratégicas para descanso. Assim,
          você mantém a mente concentrada sem cair no cansaço mental.
        </p>
        <h2>⏱ Como funciona o Pomodoro tradicional</h2>
        <ul>
          <li>
            <strong>1. Escolha uma tarefa</strong> para realizar.
          </li>
          <li>
            <strong>2. Trabalhe nela por 25 minutos</strong> sem distrações.
          </li>
          <li>
            <strong>3. Faça uma pausa curta de 5 minutos.</strong>
          </li>
          <li>
            <strong>4. Após 4 ciclos, faça uma pausa longa</strong> (entre 15 e
            30 minutos).
          </li>
        </ul>
        <br />
        <h2>🚀 O diferencial do PomusFocus</h2>
        <p>
          O PomusFocus segue a essência do Pomodoro tradicional, mas traz
          recursos modernos e personalizados para turbinar sua rotina de foco:
        </p>
        <h3>⚙️ Controle total do tempo</h3>
        <p>
          Personalize os minutos de foco, descanso curto e descanso longo
          conforme o seu ritmo.
        </p>
        <p>
          Na página de
          <span>
            <RouteLink href="/setting"> configurações</RouteLink>
          </span>
          , você ajusta tudo do seu jeito — simples e rápido.
        </p>
        <h3>🔁 Ciclos automáticos e organizados</h3>
        <p>Cada vez que você completa um ciclo, o PomusFocus:</p>
        <ul>
          <li>Registra automaticamente sua tarefa no histórico;</li>
          <li>Identifica o tipo de ciclo (foco ou descanso)</li>
          <li>E já prepara o próximo pomodoro para você continuar no fluxo.</li>
        </ul>
        <p> Nosso padrão funciona assim:</p>
        <ul>
          <li>Ciclos ímpares → Foco total no trabalho.</li>
          <li>Ciclos pares → Pausas curtas para respirar.</li>
          <li>Ciclo 8 → Descanso longo especial para resetar o foco.</li>
        </ul>
        <br />
        <h3>🍅 Visualização dos ciclos</h3>
        <p>
          Logo abaixo do cronômetro, você verá marcadores coloridos mostrando o
          andamento dos ciclos:
        </p>
        <ul>
          <li>
            🟠 Laranja - representa o momento de foco total, quando é hora de
            mergulhar na tarefa sem distrações.
          </li>
          <li>
            🔵 Azul - indica a pausa curta, o intervalo rápido pra relaxar,
            respirar e preparar a mente para o próximo ciclo.
          </li>
          <li>
            🟢 Verde - marca a pausa longa, que acontece a cada 8 ciclos
            completos, ideal pra recarregar a energia antes de recomeçar.
          </li>
        </ul>
        <p>
          Com isso, você sempre sabe onde está e o que vem a seguir, sem
          precisar anotar nada.
        </p>
        <br />
        <h3>📊 Histórico inteligente</h3>
        <p>
          Todas as suas tarefas ficam registradas automaticamente no
          <span>
            <RouteLink href="/history"> histórico </RouteLink>
          </span>
          - completas, interrompidas ou em andamento.
        </p>
        <p>
          Acompanhe seu progresso e veja como seu foco evolui ao longo dos dias.
        </p>
        <br />
        <h2>💪 Por que usar o PomusFocus?</h2>
        <p>✅ Organize seu tempo com clareza.</p>
        <p>✅ Trabalhe e descanse na medida certa.</p>
        <p>✅ Personalize cada detalhe do seu ciclo.</p>
        <p>✅ Acompanhe sua evolução de forma automática.</p>
      </GenericHtml>
    </MainTemplete>
  );
}
