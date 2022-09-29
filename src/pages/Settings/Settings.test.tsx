import React from "react";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Settings from ".";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockUseNavigate,
  };
});

describe("Settings page", () => {
  test("Should render", () => {
    const { container } = render(
      <RecoilRoot>
        <Settings />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
