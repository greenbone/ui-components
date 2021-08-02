import * as React from "react"
import {DiceRow} from "./DiceRow"
import {DiceColumn} from "./DiceColumn"

export default {
    title: "Flex"
};

export const Column = () => <DiceColumn/>;
export const Row = () => <DiceRow/>;