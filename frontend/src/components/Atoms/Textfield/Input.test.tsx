import {fireEvent, render} from "@testing-library/react";
import {Input} from "./Input";

describe("Input", () => {
  it("renders", () => {
    const onChange = jest.fn();

    const {getByRole} = render(
      <Input
        name="test"
        value="test"
        placeholder="test"
        onChange={onChange}
      />,
    );

    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange", () => {
    const onChange = jest.fn();

    const {getByRole} = render(
      <Input
        name="test"
        value="test"
        placeholder="test"
        onChange={onChange}
      />,
    );

    const input = getByRole("textbox");
    fireEvent.change(input, {target: {value: "test1"}});
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
