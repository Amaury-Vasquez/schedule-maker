import { Container, Image, Figure } from "./styles";

export const Sample = () => {
  return (
    <Container>
      <Figure>
        <Image src="https://i.imgur.com/vPQVBd8.jpg" alt="react logo" />
        <figcaption> Hello, this is a boilerplate </figcaption>
      </Figure>
    </Container>
  );
};
