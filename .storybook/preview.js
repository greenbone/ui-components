import { ThemeProvider } from 'styled-components';
import React from "react"
import {ColorTheme} from "../theme"

export const decorators = [
    (Story) => (
        <ThemeProvider theme={ColorTheme}>
            <Story />
        </ThemeProvider>
    ),
];
