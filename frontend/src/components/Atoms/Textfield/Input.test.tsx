import {fireEvent, render} from "@testing-library/react";
import {Input} from "./Input";

describe("Input", () => {
  it("renders", () => {
    const conChange = jest.fn();

    const {getByRole} = render(
      <Input
        name="test"
        value="test"
        placeholder="test"
        onChange={conChange}
        type="text"
      />,
    );

    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange", () => {
    const conChange = jest.fn();

    const {getByRole} = render(
      <Input
        name="test"
        value="test"
        placeholder="test"
        onChange={conChange}
        type="text"
      />,
    );

    const input = getByRole("textbox");
    fireEvent.change(input, {target: {value: "test1"}});
    expect(conChange).toHaveBeenCalledTimes(1);
  });
});
