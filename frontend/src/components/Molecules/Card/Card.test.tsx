import { render, screen } from "@testing-library/react";
import { FeedbackCard } from "./Card";
import { ICardProps } from "./Types";

describe("FeedbackCard component", () => {
  const cardProps: ICardProps = {
    cardTitle: "Test Title",
    cardContent: "Test Content",
  };

  test("renders the card title correctly", () => {
    render(<FeedbackCard {...cardProps} />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the card content correctly", () => {
    render(<FeedbackCard {...cardProps} />);
    const contentElement = screen.getByText(/Test Content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
