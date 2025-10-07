import { PlayCircleIcon } from "lucide-react";
import { ButtonPlay } from "../ButtonPlay";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";

export function MainForm() {
  //  const [taskName, setTaskName] = useState("");

  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Deu bom", taskNameInput.current?.value);
  }

  return (
    <>
      <form className="form" action="" onSubmit={handleCreateNewTask}>
        <div className="formRow">
          <Input
            labeltext="Atividade:"
            //            value={taskName}
            //            onChange={(e) => {
            //              setTaskName(e.target.value);
            //            }}
            ref={taskNameInput}
            id="inputtask"
            type="text"
            placeholder="Digite a atividade aqui"></Input>
          <div className="formRow">
            <p>O próximo interevalor é de 25 min</p>
          </div>
          <Cycles />
          <ButtonPlay
            icon={<PlayCircleIcon />}
            id="playtime"
            type="submit"
            color="green"
          />
        </div>
      </form>
    </>
  );
}
