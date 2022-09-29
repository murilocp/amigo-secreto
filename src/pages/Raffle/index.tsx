import React, { FormEvent, useState } from "react";
import { Card } from "../../components";
import { useParticipantList, useSortResult } from "../../state/hook";
import { SectionContainer } from "./styles";

const Raffle: React.FC = () => {
  const [participantNow, setParticipantNow] = useState("");
  const [secretFriend, setSecretFriend] = useState("");
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);

  const participants = useParticipantList();
  const result = useSortResult();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (result.has(participantNow)) {
      setSecretFriend(result.get(participantNow)!);
    }

    if (timerId) clearTimeout(timerId);

    setTimerId(
      setTimeout(() => {
        setSecretFriend("");
      }, 5000)
    );
  };

  return (
    <Card>
      <SectionContainer>
        <form onSubmit={onSubmit}>
          <select
            id="participantNow"
            name="participantNow"
            required
            placeholder="Selecione o seu nome"
            value={participantNow}
            onChange={(e) => setParticipantNow(e.target.value)}
          >
            <option>Selecione seu nome</option>
            {participants.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <button className="botao-sortear">Sortear</button>
        </form>

        {secretFriend && (
          <p className="resultado" role="alert">
            {secretFriend}
          </p>
        )}
        <footer className="sorteio">
          <img
            src="/imagens/aviao.png"
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </SectionContainer>
    </Card>
  );
};

export default Raffle;
