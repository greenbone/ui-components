import React from "react"
import {FormControl, InputAdornment, TextField as MaterialTextField} from "@material-ui/core"
import styled, {css} from "styled-components"
import Checkmark from "./assets/check.svg"
import Cross from "./assets/clear.svg"
import PropTypes from "prop-types"
import {ColorTheme} from "../Theme"


const FormElement = styled.form`
  box-sizing: border-box;
`

export function Form(props) {
    return (
        <FormElement {...props}>
            {props.children}
        </FormElement>
    )
}

const Icon = styled.img`
  height: 1.00rem;
`

const props = {
    adornment: PropTypes.node,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    isValid: PropTypes.any,
    label: PropTypes.string,
    onChange: PropTypes.func,
    helperText: PropTypes.node
}

const StyledFormControl = styled(FormControl)`
   & {display: flex;
  flex-grow: 1;
  margin: 0;
  font-family: 'DroidSans', Arial, sans-serif;

  /* All following elements with the same selector - https://developer.mozilla.org/de/docs/Web/CSS/Adjacent_sibling_selectors*/
  & + & {
    margin-left: 1.25rem;
  }

  width: 100%;
  margin-bottom: 1rem;}
`


const StyledMaterialTextField = styled(MaterialTextField)`
      input, label {
      ${props => props.readonly && css`
        color: ${props => props?.theme?.font?.text || ColorTheme.font.text};
      `}
    }


  .MuiInput-underline, .MuiFilledInput-underline {
    &:after{
       border-color: ${props => props?.theme?.input?.borderBottomColor || ColorTheme.input.borderBottomColor};
    }

    &:hover {
      border-bottom: none;
    }

    &:hover:not(:disabled):before{
      border-color: ${props => props?.theme?.input?.borderBottomColor || ColorTheme.input.borderBottomColor};
    }

  }

  .MuiFormLabel-root.Mui-focused {
    color: ${props => props?.theme?.input?.label || ColorTheme.input.label};
  }
`


const InnerInput = (props) => {
    let inputRef = React.createRef()

    const handleClear = event => {
        if (inputRef) {
            try {
                let input = inputRef
                let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
                nativeInputValueSetter.call(input, "")

                let fireableEvent = new Event("input", {bubbles: true})
                input.dispatchEvent(fireableEvent)
            } catch (exception) {
                //swallow error
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
                        if (props.inputRef)
                            props.inputRef(ref)
                        inputRef = ref
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
                        if (props.inputRef)
                            props.inputRef(ref)
                        inputRef = ref
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
        helperText = <>{isValid.map(message =>
            (<div style={{marginBottom: "5px"}} key={message}>
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
            FormHelperTextProps={{component: "div"}}
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
                    if (props.inputRef)
                        props.inputRef(ref)
                    inputRef = ref
                }
            }}
        />
    )
}


export function Input(props) {
    return (
        <StyledFormControl>
            <InnerInput {...props} />
        </StyledFormControl>
    )
}

Input.propTypes = {
    ...props
}


