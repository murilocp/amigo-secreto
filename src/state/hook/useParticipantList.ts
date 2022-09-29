import { useRecoilValue } from "recoil";
import { participantList } from "../atom";

export const useParticipantList = () => {
  return useRecoilValue(participantList);
};
