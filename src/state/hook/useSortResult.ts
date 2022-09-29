import { useRecoilValue } from "recoil";
import { secretFriendResult } from "../atom";

export const useSortResult = () => {
  return useRecoilValue(secretFriendResult);
};
