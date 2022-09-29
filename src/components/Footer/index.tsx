import React from "react";
import { useNavigate } from "react-router-dom";
import { useParticipantList } from "../../state/hook/useParticipantList";
import { useSorter } from "../../state/hook/useSorter";
import { FooterContainer } from "./styles";

const Footer: React.FC = () => {
  const participants = useParticipantList();

  const navigate = useNavigate();

  const makeRaffle = useSorter();

  const startPlaying = () => {
    makeRaffle();
    navigate("/sorteio");
  };

  return (
    <FooterContainer>
      <button onClick={startPlaying} disabled={participants.length < 3}>
        Iniciar brincadeira!
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </FooterContainer>
  );
};

export default Footer;
