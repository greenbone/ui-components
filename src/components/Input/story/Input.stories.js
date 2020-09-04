import React from "react"
import {Input} from "../index"

export default {title: "Input"}


export const Basic = () => <Input name={"name"} type={"text"}/>
export const Label = () => <Input label={"Name"} name={"name"} type={"text"}/>
export const HelperText = () => <Input helperText={"I am helping :)"} label={"Name"} name={"name"} type={"text"}/>
export const Error = () => <Input isValid={"An error occurred"} label={"Name"} name={"name"} type={"text"}/>
export const Valid = () => <Input isValid={true} label={"Name"} name={"name"} type={"text"}/>
export const MarginNormal = () => <Input label={"Name"} name={"name"} type={"text"}/>
