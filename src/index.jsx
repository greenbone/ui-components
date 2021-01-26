import React from "react"
import {render} from "react-dom"
import Example from "./components/library/example"
import {Input} from "./components/library/input"
import {ThemeProvider} from "styled-components"
import {ColorTheme} from "../theme"


const App = (props) => (
    <ThemeProvider theme={ColorTheme}>
        <Input isValid={true} name={"test"}/>
    </ThemeProvider>
)

render(<App/>, document.getElementById("root"))
