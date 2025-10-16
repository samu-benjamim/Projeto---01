import { SaveIcon } from "lucide-react";
import { ButtonPlay } from "../ButtonPlay";
import { Input } from "../Input";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMassage } from "../../adapters/showMessage";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";

export function SettingsInput() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const restTimeInput = useRef<HTMLInputElement>(null);
  const restlongTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = Number(workTimeInput.current?.value);
    const restTime = Number(restTimeInput.current?.value);
    const longrestTime = Number(restlongTimeInput.current?.value);

    if (workTime < 1 || restTime < 1 || longrestTime < 1) {
      showMassage.error("O sistema aceita apenas numeros positivos.");
      return;
    }
    dispatch({
      type: TaskActionsTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        restTime,
        longrestTime,
      },
    });
    showMassage.success("Configuração de tempo alterado");
  }

  return (
    <>
      <form onSubmit={handleSaveSettings} className="form" action="">
        <div className="formRow">
          <Input
            labeltext="Foco (min):"
            id="focoTime"
            type="number"
            max={99}
            min={1}
            ref={workTimeInput}
            defaultValue={state.config.workTime}></Input>
        </div>
        <div className="formRow">
          <Input
            labeltext="Pausa curta (min):"
            id="pausaCurta"
            type="number"
            max={30}
            min={1}
            ref={restTimeInput}
            defaultValue={state.config.restTime}></Input>
        </div>
        <div className="formRow">
          <Input
            labeltext="Pausa longa (min):"
            id="pausaLonga"
            type="number"
            max={60}
            min={1}
            ref={restlongTimeInput}
            defaultValue={state.config.longrestTime}></Input>
        </div>
        <ButtonPlay
          icon={<SaveIcon />}
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
