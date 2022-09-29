import React from "react";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <div
          className="imagem-logo"
          role="img"
          aria-label="Logo do Sorteador"
        />
        <img
          className="participante"
          src="/imagens/participante.png"
          alt="Participante com um presente na mão"
        />
      </header>
    </Container>
  );
};

export default Header;
