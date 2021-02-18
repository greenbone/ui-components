import React from "react"
import {render, screen, GetStyleObject} from "test-utils"
import {Flex, FlexColumn, FlexRow} from "../index"

describe("Flex", () => {

    describe("base", () => {
        let container = null
        const childText = "Child content text"

        beforeEach(() => {
            container = render(<Flex>{childText}</Flex>)?.container
        })

        it("renders without crashing", () => {
            expect(container.querySelector("div")).toBeTruthy()
        })

        it("passes children through", () => {
            expect(screen.getByText(childText)).toBeInTheDocument()
        })
    })

    describe("style", () => {
        test("fullWidth", () => {
                render(<Flex fullWidth></Flex>)
                const style = GetStyleObject(Flex)
                expect(style.width).toBe("100%")
            }
        )

        test("flexGrow", () => {
            render(<Flex flexGrow={2}></Flex>)
            expect(GetStyleObject(Flex)["flex-grow"]).toBe("2")
        })

        test("justifyContent", () => {
            render(<Flex justifyContent={"flex-end"}></Flex>)
            expect(GetStyleObject(Flex)["justify-content"]).toBe("flex-end")
        })

        test("flexWrap", () => {
            render(<Flex flexWrap={"wrap"}></Flex>)
            expect(GetStyleObject(Flex)["flex-wrap"]).toBe("wrap")
        })

        test("wrap", () => {
            render(<Flex wrap={"wrap-reverse"}></Flex>)
            expect(GetStyleObject(Flex)["flex-wrap"]).toBe("wrap-reverse")
        })


        test("alignItems", () => {
            render(<Flex alignItems={"center"}></Flex>)
            expect(GetStyleObject(Flex)["align-items"]).toBe("center")
        })

        test("full", () => {
            render(<Flex full></Flex>)
            expect(GetStyleObject(Flex)["width"]).toBe("100%")
            expect(GetStyleObject(Flex)["height"]).toBe("100%")
        })

        test("center", () => {
            render(<Flex center></Flex>)
            expect(GetStyleObject(Flex)["justify-content"]).toBe("center")
            expect(GetStyleObject(Flex)["align-items"]).toBe("center")
            expect(GetStyleObject(Flex)["align-content"]).toBe("center")

        })

        test("borderBox", () => {
            render(<Flex borderBox></Flex>)
            expect(GetStyleObject(Flex)["box-sizing"]).toBe("border-box")
        })

        test("FlexRow", () => {
            render(<FlexRow></FlexRow>)
            expect(GetStyleObject(FlexRow)["flex-direction"]).toBe("row")
        })

        test("FlexColumn", () => {
            render(<FlexColumn></FlexColumn>)
            expect(GetStyleObject(FlexColumn)["flex-direction"]).toBe("column")
        })

    })


})
