import styles from "./styles.module.css";

type DeaultInputProps = {
  id: string;
  labeltext?: string; // o ? indica que a propriedade pode ou não ser enviada
} & React.ComponentProps<"input">; // & é and adicionando mais tipagens ao type

export function Input({ id, type, labeltext, ...rest }: DeaultInputProps) {
  // usa o ...rest para passar toso outros propiedades para ser aplicadas
  return (
    <>
      {labeltext && <label htmlFor="">{labeltext}</label>}
      {/* indica que o labeltext é opicional então se ele não foi atribuido não irá ter nada na pagina*/}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
