import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MassageContainer } from "./components/MassageContainer/MassageContainer";
import { MainRouter } from "./router/MainRouter";

import "./styles/thema.css";
import "./styles/global.css";

export function App() {
  return (
    <TaskContextProvider>
      <MainRouter />
      <MassageContainer />
    </TaskContextProvider>
  );
}
