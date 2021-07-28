import * as React from "react"

export type TFormProps = {}

export type TInputProps = {
    type: "text" | "number" | "email" | "password" | "tel" | "url",
    name: string,
    isValid?: null | string | Array<string | number | React.ReactNode> | React.ReactNode | React.ReactNodeArray,
    adornment?: React.ReactNode,
    value?: any,
    label?: string | React.ReactNode,
    helperText?: string | React.ReactNode,
    inputRef?: (...args: any) => any,
    readOnly?: boolean,
    disabled?: boolean
    onChange?: (event: React.ChangeEvent) => any

}