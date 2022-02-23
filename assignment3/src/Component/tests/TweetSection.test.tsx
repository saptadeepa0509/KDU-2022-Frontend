import { render, screen } from "@testing-library/react";
import TweetSection from "../TweetSection";

describe("Testing TweetSection:", () => {
    it("Rendering Text", () => {
        const { getByTitle } = render(<TweetSection />);
        expect(getByTitle("tweet")).toBeInTheDocument();
    }
    )
}
);


