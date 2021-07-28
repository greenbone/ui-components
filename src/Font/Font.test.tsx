// Generated with util/create-component.js
import React from "react"
import {render, screen} from "@test-utils/test-utils"

import {Bold, Caption, Headline, Paragraph, Subheadline, Text, Tiny} from "./Font"


const testText = "Lorem ipsum dolor"

const components = [Headline, Subheadline, Caption, Text, Bold, Paragraph, Tiny]

describe("<Font>", () => {
    test.each(components)('myFunc work correctly for %s', (Component) => {
        render(<Component>{testText}</Component>)
        expect(screen.getByText(testText)).toBeVisible()
    })
})
