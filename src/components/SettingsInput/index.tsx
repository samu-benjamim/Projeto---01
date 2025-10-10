import { Save } from "lucide-react";
import { ButtonPlay } from "../ButtonPlay";
import { Input } from "../Input";

export function SettingsInput() {
  return (
    <>
      <form className="form" action="">
        <div className="formRow">
          <Input
            labeltext="Foco (min):"
            id="focoTime"
            type="number"
            placeholder="25"></Input>
        </div>
        <div className="formRow">
          <Input
            labeltext="Pausa curta (min):"
            id="pausaCurta"
            type="number"
            placeholder="5"></Input>
        </div>
        <div className="formRow">
          <Input
            labeltext="Pausa longa (min):"
            id="pausaLonga"
            type="number"
            placeholder="10"></Input>
        </div>
        <ButtonPlay
          icon={<Save />}
          aria-label="Iniciar nova atividade"
          title="Salvar configura"
          id="salvarSetting"
          type="submit"
          color="red"
          key="submit"
        />
      </form>
    </>
  );
}
