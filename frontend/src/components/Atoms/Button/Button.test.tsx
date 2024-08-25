import {render, fireEvent} from "@testing-library/react";
import {Button} from "./Button";

describe("Button", () => {
  it("should renders with default props", () => {
    const {getByRole} = render(<Button text="Click Me" />);
    const buttonElement = getByRole("button", {name: /click me/i});

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/click me/i);
    expect(buttonElement).not.toBeDisabled();
  });

  it("should renders with custom props", () => {
    const {getByRole} = render(
      <Button
        text="Submit"
        variant="outlined"
        color="secondary"
        size="large"
        disabled={true}
      />,
    );
    const buttonElement = getByRole("button", {name: /submit/i});

    expect(buttonElement).toHaveClass("MuiButton-outlined");
    expect(buttonElement).toHaveClass("MuiButton-sizeLarge");
    expect(buttonElement).toHaveClass("Mui-disabled");
    expect(buttonElement).toHaveAttribute("disabled");
  });

  it("should calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    const {getByRole} = render(
      <Button text="Click Me" onClick={handleClick} />,
    );

    const buttonElement = getByRole("button", {name: /click me/i});
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
