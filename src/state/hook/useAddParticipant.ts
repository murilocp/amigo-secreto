import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, participantList } from "../atom";

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantList);
  const list = useRecoilValue(participantList);

  const setError = useSetRecoilState(errorState);

  return (participant: string) => {
    if (list.includes(participant)) {
      setError("Nomes duplicados não são permitidos!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    return setList((prevState) => [...prevState, participant]);
  };
};
