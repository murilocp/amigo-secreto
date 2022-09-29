import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { useParticipantList } from "../../state/hook/useParticipantList";

jest.mock("../../state/hook/useParticipantList", () => {
  return {
    useParticipantList: jest.fn(),
  };
});
const mockUseSorter = jest.fn();

const mockUseNavigate = jest.fn();

jest.mock("../../state/hook/useSorter", () => {
  return {
    useSorter: () => mockUseSorter,
  };
});
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockUseNavigate,
  };
});

describe("No participants", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  test("Should not start", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});

describe("Enough participants to start", () => {
  const participants = ["Ana", "Clara", "Maria"];
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });
  test("Should start", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();
  });

  test("Should start playing", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockUseSorter).toHaveBeenCalledTimes(1);
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockUseNavigate).toHaveBeenCalledWith("/sorteio");
  });
});
