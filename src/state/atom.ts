import { atom } from "recoil";

export const participantList = atom<string[]>({
  key: "participantListState",
  default: [],
});

export const secretFriendResult = atom<Map<string, string>>({
  key: "secretFriendResult",
  default: new Map(),
});

export const errorState = atom<string>({
  key: "errorMessageState",
  default: "",
});
