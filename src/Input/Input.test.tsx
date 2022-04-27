import React from "react"
import {render, screen,} from "@test-utils/test-utils"
import {Input} from "./Input"


describe("<Input>", () => {
    let container = null
    let text = "I am a text"

    beforeEach(() => {
        container = render(<Input name={"text"} type={"text"} value={text}/>)?.container
    })

    it("renders without crashing", () => {
        expect(container.querySelector("input")).toBeTruthy()
    })

    it("contains the passed value", () => {
        expect(screen.getByRole('textbox', {value: text} as any)).toBeInTheDocument()
    })
})
