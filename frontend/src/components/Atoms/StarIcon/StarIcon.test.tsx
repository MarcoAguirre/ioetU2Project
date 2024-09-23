import {fireEvent, render} from "@testing-library/react";
import { RateStar } from "./StarIcon";

describe("StarIcon",  () => {
    it("renders", () => {
        const {getByTestId} = render (
            <RateStar/>
        )
        const starIconElement = getByTestId("StarIcon");

        expect(starIconElement).toBeInTheDocument();
        expect(starIconElement).toHaveClass("MuiSvgIcon-fontSizeLarge");
        expect(starIconElement).toHaveClass("MuiSvgIcon-colorPrimary");
    })
})