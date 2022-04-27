import React from "react"
import {FormControl, InputAdornment, TextField as MaterialTextField} from "@material-ui/core"
import styled, {css} from "styled-components"
import Checkmark from "./assets/check.svg"
import Cross from "./assets/clear.svg"
import {ColorTheme} from "../Theme"
import {TFormProps, TInputProps} from "./Input.types"

const FormElement = styled.form`
  box-sizing: border-box;
`

export const Form: React.FC<TFormProps> = (props: any) => {
    return (
        <FormElement {...props}>
            {props.children}
        </FormElement>
    )
}

const Icon = styled.img`
  height: 1.00rem;
`
const StyledFormControl = styled(FormControl)`
  & {
    display: flex;
    flex-grow: 1;
    margin: 0;
    font-family: 'DroidSans', Arial, sans-serif;
    width: 100%;
    margin-bottom: 1rem;
  }
`

const StyledMaterialTextField = styled(MaterialTextField)<{ readOnly?: boolean }>`
  input, label {
    ${props => props.readOnly && css`
      color: ${props => props?.theme?.font?.text || ColorTheme.font.text};
    `}
  }


  .MuiInput-underline, .MuiFilledInput-underline {
    &:after {
      border-color: ${props => props?.theme?.input?.borderBottomColor || ColorTheme.input.borderBottomColor};
    }

    &:hover {
      border-bottom: none;
    }

    &:hover:not(:disabled):before {
      border-color: ${props => props?.theme?.input?.borderBottomColor || ColorTheme.input.borderBottomColor};
    }

  }

  .MuiFormLabel-root.Mui-focused {
    color: ${props => props?.theme?.input?.label || ColorTheme.input.label};
  }
`

const InnerInput: React.FC<TInputProps> = (props) => {
    let internalInputRef = React.createRef()

    const handleClear = () => {
        if (internalInputRef) {
            try {
                const input = internalInputRef
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
                nativeInputValueSetter.call(input, "")

                const fireableEvent = new Event("input", {bubbles: true})
                // @ts-ignore
                input.dispatchEvent(fireableEvent)
            } catch (exception) {
                // swallow error
            }

        }
    }


    let {isValid, adornment, helperText, readOnly, disabled, ...others} = props


    if (typeof helperText !== "string") {
        helperText = undefined
    }

    if (isValid === true) {
        return (
            <StyledMaterialTextField
                readOnly={readOnly}
                disabled={disabled || readOnly}
                inputRef={props.inputRef}
                InputLabelProps={{style: {fontFamily: "'DroidSans', Arial, sans-serif"}}}
                helperText={helperText}
                {...others}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon src={Checkmark}/>
                        </InputAdornment>
                    ),
                    startAdornment: adornment,
                    style: {fontFamily: "'DroidSans', Arial, sans-serif"},
                    inputRef: (ref) => {
                        if (props.inputRef) {
                            props.inputRef(ref)
                        }
                        internalInputRef = ref
                    }
                }}
            />
        )
    }

    if (isValid === null || isValid === undefined) {
        return (
            <StyledMaterialTextField
                readOnly={readOnly}
                disabled={disabled || readOnly}
                inputRef={props.inputRef}
                InputLabelProps={{style: {fontFamily: "'DroidSans', Arial, sans-serif"}}}
                InputProps={{
                    style: {fontFamily: "'DroidSans', Arial, sans-serif"},
                    startAdornment: adornment,
                    inputRef: (ref) => {
                        if (props.inputRef) {
                            props.inputRef(ref)
                        }
                        internalInputRef = ref
                    }
                }}
                helperText={helperText}
                {...others}
            />
        )
    }

    if (typeof isValid === "string" || React.isValidElement(isValid)) {
        helperText = isValid
    }

    if (Array.isArray(isValid)) {
        helperText = <>{isValid.map((message, index) =>
            (<div style={{marginBottom: "5px"}} key={index}>
                    {message}
                </div>
            ))
        }</>
    }

    return (
        <StyledMaterialTextField
            readOnly={readOnly}
            disabled={disabled || readOnly}
            inputRef={props.inputRef}
            InputLabelProps={{style: {fontFamily: "'DroidSans', Arial, sans-serif"}}}
            FormHelperTextProps={{component: "div"} as any}
            helperText={helperText}
            error
            {...others}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Icon src={Cross} onClick={handleClear}/>
                    </InputAdornment>
                ),
                startAdornment: adornment,
                style: {fontFamily: "'DroidSans', Arial, sans-serif"},
                inputRef: (ref) => {
                    if (props.inputRef) {
                        props.inputRef(ref)
                    }
                    internalInputRef = ref

                }
            }}
        />
    )
}

export const Input: React.FC<TInputProps> = (props) => {
    return (
        <StyledFormControl>
            <InnerInput {...props} />
        </StyledFormControl>
    )
}