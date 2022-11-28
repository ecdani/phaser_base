import React from "react";
import { render, screen } from "@testing-library/react";
import Card from ".";

// eslint-disable-next-line react/prop-types
function Component({ children = "foo-children", title = "foo-title" }) {
  return <Card title={title}>{children}</Card>;
}

describe("Card component", () => {
  describe("render", () => {
    it("should render the correct children", () => {
      const children = "bar-children";
      render(<Component>{children}</Component>);

      expect(screen.getByText(children)).toBeInTheDocument();
    });

    it("should render the correct title", () => {
      const title = "bar-title";
      render(<Component title={title} />);

      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
