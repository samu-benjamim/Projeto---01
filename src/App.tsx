import { Home } from "./pages/Home";

import "./styles/thema.css";
import "./styles/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MassageContainer } from "./components/MassageContainer/MassageContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/Not Found";
import { About } from "./pages/About";
import { Setting } from "./pages/Settings";

export function App() {
  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <MassageContainer />
    </TaskContextProvider>
  );
}
