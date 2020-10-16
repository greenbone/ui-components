import styled, {css} from "styled-components"


const Types = {
    outline: css`
      background: transparent;
      border: 1px solid ${props => props.theme.button.normal.background};
      color: ${props => props.theme.button.normal.background};
      &:hover {
        background: transparent;
        border: 1px solid ${props => props.theme.button.normal.hover};
        color: ${props => props.theme.button.normal.hover};
      };
      font-weight: normal;                 
    `
}

export const Button = (styled.button`
  box-sizing: border-box;
  color: ${props => props.theme.button.normal.text};
  background-color: ${props => props.theme.button.normal.background};
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
    background-color: ${props => props.theme.button.normal.hover};
  }
  
  ${props => props.disabled && css`
      background-color: ${props => props.theme.button.normal.disabled};

    &:hover  {
      cursor: not-allowed;
      background-color: ${props => props.theme.button.normal.disabled};
    }
  `}

  ${props => props.loading && css`
    &:hover {
      background-color: ${props => props.theme.button.normal.background};
      cursor: wait;
    }
  `}

  ${props => props.type && Types[props.type]};
  
    & + & { 
    margin-left: 1.25rem;
  }

`)

export const ActionButton = styled(Button)`
  margin: 0;
`

const GhostButtonVariants = {
    negative: css`
       border: 1px solid ${props => props.theme.button.normal.background};
       color: ${props => props.theme.button.normal.background};
       &:hover {
         background: transparent;
         border: 1px solid ${props => props.theme.button.normal.hover};
         color: ${props => props.theme.button.normal.hover};
       };
    `
}

export const GhostButton = styled(Button)`
  background: transparent;
  border: 1px solid ${props => props.theme.button.normal.background};
  color: ${props => props.theme.button.normal.background};
  font-weight: normal;
  &:hover {
     background: transparent;
     border: 1px solid ${props => props.theme.button.normal.hover};
     color: ${props => props.theme.button.normal.hover};
  };

   ${props => props.variant && GhostButtonVariants[props.variant]}
`

export const AbortButton = GhostButton

/*
export const AbortButton = styled(Button)`
  background-color: ${props => props.theme.button.abort.background};

  &:hover{
    background-color: ${props => props.theme.button.abort.hover};
  }

  ${props => props.disabled && css`
    background-color: ${props => props.theme.button.abort.disabled};

    &:hover  {
      background-color: ${props => props.theme.button.abort.disabled};
    }
  `}

  ${props => props.loading && css`
    &:hover {
      cursor: wait;
    }
  `}
`; */


export const IconButton = styled.button`
  border: none;
  background: ${props => props.theme.button.icon.background};
  box-sizing: border-box;
  min-height: 2.35rem;
  width: 2.35rem;
  padding: 0.55rem;
  border-radius: 3px;
  transition:all 0.3s ease;

  &:hover {
    background: ${props => props.theme.button.icon.hover};
    cursor: pointer;
  }

  &:active {
    background: ${props => props.theme.button.icon.active};
  }

  ${props => props.disabled && css`
    opacity: 0.5;
    &:hover {
        background: ${props => props.theme.button.icon.background};
        cursor: default;
    }
  
    &:active {
        background: ${props => props.theme.button.icon.background};
    }
  `}
`

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
