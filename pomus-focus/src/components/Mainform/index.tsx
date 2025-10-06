import { PlayCircleIcon } from "lucide-react";
import { ButtonPlay } from "../ButtonPlay";
import { Cycles } from "../Cycles";
import { Input } from "../Input";

export function MainForm() {
  return (
    <>
      <form className="form" action="">
        <div className="formRow">
          <Input
            labeltext="Atividade:"
            id="inputtask"
            type="text"
            placeholder="Digite a atividade aqui"></Input>
        </div>
      </form>
      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Cycles />
      <ButtonPlay
        icon={<PlayCircleIcon />}
        id="playtime"
        type="button"
        color="green"
      />
    </>
  );
}
