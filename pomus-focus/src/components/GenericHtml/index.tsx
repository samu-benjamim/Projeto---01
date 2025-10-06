import { Container } from "../Container";
import styles from "./styles.module.css";

type GenericHtmlProps = {
  children: React.ReactNode;
};
export function GenericHtml({ children }: GenericHtmlProps) {
  return (
    <Container>
      <div className={styles.genericHtml}>{children}</div>
    </Container>
  );
}
