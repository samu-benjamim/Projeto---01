# **Pomus Focus**

Aplicação frontend desenvolvida com **React + TypeScript + Vite** para gerenciar ciclos de foco no estilo **Pomodoro**.
Projetada para ser **simples, extensível e sólida**, com foco em **boas práticas**, **tipagem estrita**, **Context API** e uso de **Web Workers** para precisão do timer.

---

## 🧭 **Sumário**

- [Visão Geral](#visão-geral)
- [Recursos](#recursos)
- [Funcionalidades Detalhadas](#funcionalidades-detalhadas)
- [Instalação e Execução](#instalação-e-execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Notas Técnicas](#notas-técnicas)
- [Testes e Validação](#testes-e-validação)

---

## 🚀 **Visão Geral**

O **Pomus Focus** ajuda o usuário a criar tarefas com tempos de foco e pausas, mantendo o controle dos ciclos e exibindo o tempo restante com precisão — **mesmo quando o app perde o foco da aba**, graças ao uso de **Web Workers**.

**Principais Tecnologias:**

- React 19
- TypeScript
- Vite
- Web Worker (controle do timer em background)
- ESLint (qualidade e padronização)

---

## 🧩 **Recursos**

- Criação e edição de tarefas com nome e duração
- Início, pausa e encerramento de ciclos de foco
- Contador central exibindo o tempo formatado (`MM:SS`)
- Persistência de estado via **Context API** (expansível para localStorage)
- Timer em **background** com Web Worker (`src/workers/timerworker.js`)
- Estrutura modular de componentes (`ButtonPlay`, `Input`, `Cycles`, etc.)
- Tipagem estrita e validações TypeScript
- Integrações: **date-fns**, **react-toastify**, **lucide-react**

---

## 🧠 **Funcionalidades Detalhadas**

Abaixo, duas das principais funcionalidades com explicações práticas e técnicas.

### 1️⃣ Iniciar um Ciclo de Foco (Pomodoro)

**O que faz:**
Cria uma tarefa ativa e inicia o contador em tempo real.

**Como usar:**

1. Vá até a página **Home**
2. No campo “Atividade”, digite o nome da tarefa
3. Clique no botão de **Play**
4. O contador exibirá o tempo restante (`MM:SS`)

**Implementação técnica:**

- Cria uma `activeTask` no `TaskContext` com `startDate` e `duration`
- O `TimerWorkerManager` instancia um Web Worker que calcula `endDate` e envia mensagens a cada tick
- Atualizações do tempo são feitas via callback sem travar o **main thread**

**Nota:**
Mesmo que o app perca o foco (ou você troque de aba), o contador continua funcionando com precisão.

---

### 2️⃣ Pausar ou Interromper um Ciclo

**O que faz:**
Interrompe o ciclo atual, registra o horário (`interruptDate`) e atualiza a UI.

**Como usar:**

1. Clique no botão de **Pause/Interromper**
2. O ciclo atual é pausado e marcado como interrompido
3. A interface atualiza mostrando as próximas ações (reiniciar ou descartar)

**Implementação técnica:**

- Dispara um `TaskAction` que atualiza `state.activeTask.interruptDate`
- Chama `TimerWorkerManager.terminate()` para encerrar o worker e liberar recursos

**Nota:**
Verifique no console se `interruptDate` foi corretamente registrado após a pausa.

---

## ⚙️ **Instalação e Execução**

### Pré-requisitos

- Node.js 18+
- npm 9+ ou yarn

### Passos

```bash
cd "c:\Users\samub\Documents\GitHub\REACT\Projeto - 01\pomus-focus"
npm install
```

### Executar localmente

```bash
npm run dev
```

Acesse o app no endereço exibido (ex: `http://localhost:5173`).

### Build de produção

```bash
npm run build
npm run preview   # para testar a build localmente
```

---

## 🧱 **Estrutura do Projeto**

```
pomus-focus/
├── index.html
├── src/
│   ├── main.tsx               # Bootstrap da aplicação
│   ├── App.tsx                # Roteamento + Context Provider
│   ├── components/            # UI modular (ButtonPlay, CountDown, etc.)
│   ├── contexts/              # TaskContext e providers
│   ├── workers/               # timerworker.js e TimerWorkerManager.ts
│   ├── pages/                 # Home, About, NotFound
│   └── styles/                # global.css e theme.css
```

---

## 🧩 **Notas Técnicas**

- `erasableSyntaxOnly`: presente em `tsconfig.*.json`.
  Caso cause erros de build, defina como `false` ou substitua enums por objetos `const`.
- Worker: instanciado via

  ```ts
  new Worker(new URL("./timerworker.js", import.meta.url), { type: "module" });
  ```

  garantindo compatibilidade com o Vite.

- No VS Code, selecione a versão do TypeScript do **workspace** (Ctrl+Shift+P → “Select TypeScript Version”).

---

## 🧪 **Testes e Validação**

Atualmente sem testes automatizados.
Recomendações para evolução:

- Criar testes unitários com **Vitest** ou **Jest**
- Simular o comportamento do worker com mocks de `postMessage` / `onmessage`

---

## 🤝 **Contribuindo**

1. Faça um **fork** do repositório
2. Crie uma branch: `feature/minha-nova-funcionalidade`
3. Envie um **Pull Request** com uma breve descrição das mudanças
