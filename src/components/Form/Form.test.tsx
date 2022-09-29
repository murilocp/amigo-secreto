import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Form from "../Form";

describe("Form.tsx behavior", () => {
  test("When input is empty, new collaborators cant be add", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("Add new participant if the name input is filled", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Teste" } });
    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("Should not add duplicate names", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Teste" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Teste" } });
    fireEvent.click(button);

    const errorMsg = screen.getByRole("alert");

    expect(errorMsg.textContent).toBe("Nomes duplicados não são permitidos!");
  });

  test("Error message should disappear after 3 seconds", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Teste" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Teste" } });
    fireEvent.click(button);

    let errorMsg = screen.queryByRole("alert");

    expect(errorMsg).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMsg = screen.queryByRole("alert");
    expect(errorMsg).toBeNull();
  });
});
