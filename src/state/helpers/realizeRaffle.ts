import shuffle from "just-shuffle";

export const realizeRaffle = (participants: string[]) => {
  const total = participants.length;

  const sorted = shuffle(participants);
  const result = new Map<string, string>();

  participants.forEach((item, index) => {
    const friendIndex = index === total - 1 ? 0 : index + 1;
    result.set(sorted[index], sorted[friendIndex]);
  });

  return result;
};
