import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Raffle from ".";
import { useParticipantList, useSortResult } from "../../state/hook";

jest.mock("../../state/hook/useParticipantList", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

jest.mock("../../state/hook/useSortResult", () => {
  return {
    useSortResult: jest.fn(),
  };
});

describe("Raffle page", () => {
  const participants = ["Ana", "Maria", "Murilo"];

  const result = new Map([
    ["Ana", "Murilo"],
    ["Murilo", "Maria"],
    ["Maria", "Ana"],
  ]);

  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
    (useSortResult as jest.Mock).mockReturnValue(result);
  });
  test("All participants should view his secret friend", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length + 1);
  });

  test("Should show secret friend when requested", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, { target: { value: participants[0] } });

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const secretFriend = screen.getByRole("alert");

    expect(secretFriend).toBeInTheDocument();
  });
});
