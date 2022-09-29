import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";
import { realizeRaffle } from "../helpers/realizeRaffle";
import { useParticipantList } from "./useParticipantList";

export const useSorter = () => {
  const participants = useParticipantList();
  const setResult = useSetRecoilState(secretFriendResult);

  return () => {
    const result = realizeRaffle(participants);
    setResult(result);
  };
};
