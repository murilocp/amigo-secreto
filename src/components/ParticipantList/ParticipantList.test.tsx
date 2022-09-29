import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ParticipantList from ".";
import { useParticipantList } from "../../state/hook/useParticipantList";

jest.mock("../../state/hook/useParticipantList", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe("Empty participant list", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  test("Should render an empty list", () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");

    expect(items).toHaveLength(0);
  });
});

describe("Filled participant list", () => {
  const participants = ["Ana", "Clara"];
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });
  test("Should render a filled list", () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");

    expect(items).toHaveLength(participants.length);
  });
});
