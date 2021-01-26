import styled, {css} from "styled-components";


export const Flex = (styled.div`
 display: flex;
 clear: both;

 ${props => props.flexGrow && css`
    flex-grow: ${props.flexGrow};
 `}
  
 ${props => props.justifyContent && css`
   justify-content: ${props.justifyContent};
 `}

 ${props => props.flexWrap && css`
    flex-wrap: ${props.flexWrap}
 `};

 ${props => props.alignItems && css`
    align-items: ${props.alignItems};
 `}

 ${props => props.full && css`
   height: 100%;
   width: 100%;
 `}
 
 ${props => props.wrap && css`
    flex-wrap: ${props.wrap};
`}
  
 ${props => props.fullWidth && css`
   width: 100%;
 `}
   
 ${props => props.center && css`
   justify-content: center;
   align-items: center;
   align-content: center;
 `}
 
 ${props => props.borderBox && css`box-sizing: border-box`}
`);

export const FlexRow = (styled(Flex)`
  flex-direction: row;  
`);

export const FlexColumn = (styled(Flex)`
  flex-direction: column;
`);
