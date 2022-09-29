import React from "react";
import { useParticipantList } from "../../state/hook/useParticipantList";

// import { Container } from './styles';

const ParticipantList: React.FC = () => {
  const participants: string[] = useParticipantList();

  return (
    <ul>
      {participants.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ParticipantList;
