import { ButtonMenu } from "../../components/ButtonMenu";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";

type MainTempleteProps = {
  children: React.ReactNode;
};

export function MainTemplete({ children }: MainTempleteProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <ButtonMenu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
