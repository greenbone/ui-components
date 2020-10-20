import styled, {css} from "styled-components"
import {ColorTheme} from "../Theme"


const Types = {
    outline: css`
      background: transparent;
      border: 1px solid ${props => props?.theme?.button?.normal?.background || ColorTheme.button.normal.background};
      color: ${props => props?.theme?.button?.normal?.background || ColorTheme.button.normal.background};
      &:hover {
        background: transparent;
        border: 1px solid ${props => props?.theme?.button?.normal?.hover || ColorTheme.button.normal.hover};
        color: ${props => props?.theme?.button?.normal?.hover || ColorTheme.button.normal.hover};
      };
      font-weight: normal;                 
    `
}

export const Button = (styled.button`
  box-sizing: border-box;
  color: ${props => props?.theme?.button?.normal?.text || ColorTheme.button.normal.text};
  background-color: ${props => props?.theme?.button?.normal?.background || ColorTheme.button.normal};
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: normal;
  font-family: Netto, sans-serif;
  min-height: 2.25rem;

  margin: 0;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  
  &:hover{
    cursor: pointer;
    background-color: ${props => props?.theme?.button?.normal?.hover || ColorTheme.button.normal.hover};
  }
  
  ${props => props.disabled && css`
      background-color: ${props => props?.theme?.button?.normal?.disabled || ColorTheme.button.normal.disabled};

    &:hover  {
      cursor: not-allowed;
      background-color: ${props => props?.theme?.button?.normal?.disabled || ColorTheme.button.normal.disabled};
    }
  `}

  ${props => props.loading && css`
    &:hover {
      background-color: ${props => props?.theme?.button?.normal?.background || ColorTheme.button.normal.background};
      cursor: wait;
    }
  `}

  ${props => props.type && Types[props.type]};
  
    & + & { 
    margin-left: 1.25rem;
  }

`)


const GhostButtonVariants = {
    negative: css`
       border: 1px solid ${props => props?.theme?.button?.normal?.background || ColorTheme.button.normal.background};
       color: ${props => props?.theme?.button?.normal?.background || ColorTheme.button.normal.background};
       &:hover {
         background: transparent;
         border: 1px solid ${props => props?.theme?.button?.normal?.hover || ColorTheme.button.normal.hover};
         color: ${props => props?.theme?.button?.normal?.hover || ColorTheme.button.normal.hover};
       };
    `
}

export const GhostButton = styled(Button)`
  background: transparent;
  border: 1px solid ${props => props?.theme?.button?.normal?.background || ColorTheme.button.normal.background};
  color: ${props => props?.theme?.button?.normal?.background || ColorTheme.button.normal.background};
  font-weight: normal;
  &:hover {
     background: transparent;
     border: 1px solid ${props => props?.theme?.button?.normal?.hover || ColorTheme.button.normal.hover};
     color: ${props => props?.theme?.button?.normal?.hover || ColorTheme.button.normal.hover};
  };

   ${props => props.variant && GhostButtonVariants[props.variant]}
`

export const AbortButton = GhostButton

export const LinkButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  
  &:hover {
    text-decoration: underline;
  }
  
  ${props => props.disabled && css`
    color: lightgrey;
    cursor: default;
    &:hover {
      text-decoration: none;
    }
  `}
`
