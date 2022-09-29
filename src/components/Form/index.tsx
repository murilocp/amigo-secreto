import React, { useRef, useState } from "react";
import { useAddParticipant } from "../../state/hook/useAddParticipant";
import { useErrorMessage } from "../../state/hook/useErrorMessage";

import { FormContainer } from "./styles";

const Form: React.FC = () => {
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const add = useAddParticipant();

  const errorMessage = useErrorMessage();

  const addParticipant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    add(name);

    setName("");
    inputRef.current?.focus();
  };

  return (
    <FormContainer onSubmit={addParticipant}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />

        <button disabled={!name}>Adicionar</button>
      </div>
      {errorMessage && (
        <p className="alerta erro" role="alert">
          {errorMessage}
        </p>
      )}
    </FormContainer>
  );
};

export default Form;
