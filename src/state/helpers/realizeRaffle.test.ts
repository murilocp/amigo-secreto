import { realizeRaffle } from "./realizeRaffle";

describe("Secret friend raffle", () => {
  test("Each participant must not raffle himself", () => {
    const participants = ["Ana", "Maria", "Murilo", "João", "André", "Rafael"];

    const raffle = realizeRaffle(participants);
    participants.forEach((item) => {
      const secretFriend = raffle.get(item);
      expect(secretFriend).not.toEqual(item);
    });
  });
});
