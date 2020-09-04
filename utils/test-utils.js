import React from "react"
import {render} from "@testing-library/react"
import {ThemeProvider} from "styled-components"
import {Flex} from "../src/components/Flex"
import {ColorTheme} from "../Theme"


const AllTheProviders = ({children}) => (
    <ThemeProvider theme={ColorTheme}>
        {children}
    </ThemeProvider>
)

const customRender = (ui, options) =>
    render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from "@testing-library/react"

// override render method
export {customRender as render}

export function GetStyleObject(Component) {
    const elementClass = Component.componentStyle.componentId
    const rootElement = document.querySelector(`.${elementClass}`)
    return window.getComputedStyle(rootElement)

}
