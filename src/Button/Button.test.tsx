import React from "react"
import {render} from "@testing-library/react"

import {Button} from "./Button"

describe("<Button>", () => {


  const renderComponent = () => render(<Button data-testid="Button">Click Here</Button>);

  it("should render text correctly", () => {

    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("Click Here");
  });
});
