import React from "react"
import {render} from "react-dom"
import Example from "./components/Library/Example"
import {Input} from "./components/Library/Input"
import {ThemeProvider} from "styled-components"
import {ColorTheme} from "../Theme"


const App = (props) => (
    <ThemeProvider theme={ColorTheme}>
        <Input isValid={true} name={"test"}/>
    </ThemeProvider>
)

render(<App/>, document.getElementById("root"))
