import styled, {css} from "styled-components"
import {TFontProps} from "./Font.types"


const Font = styled.div<TFontProps>`
  margin: 0;
  margin-bottom: 0.94rem;
  font-weight: normal;
  font-family: DroidSans, sans-serif;
  font-size: 1rem;
  ${props => props.color && css`color: ${props.color}`};
  ${props => props.noMargin && css`margin: 0`};
  ${props => props.light && css`font-weight: 200`} ;
  ${props => props.thin && css`font-weight: 100`};
  ${props => props.bold && css`font-weight: bold`}
  ${props => props.marginRight && css`margin-right: ${props.marginRight}`};
  ${props => props.marginLeft && css`margin-Left: ${props.marginLeft}`};
  ${props => props.marginTop && css`margin-Top: ${props.marginTop}`};
  ${props => props.marginBottom && css`margin-Bottom: ${props.marginBottom}`};
  ${props => props.noWrap && "white-space: nowrap"};
`

export const Headline = styled(Font.withComponent("h1"))<TFontProps>`
  font-size: 2rem;
  font-family: DroidSans, sans-serif;
  color: ${props => props.theme.font.headline};
  font-weight: normal;
`

export const Subheadline = styled(Font.withComponent("h2"))<TFontProps>`
  font-size: 1.63rem;
  font-family: DroidSans, sans-serif;
  color: ${props => props.theme.font.subheadline};
  font-weight: normal;
`

export const Caption = styled(Font.withComponent("h3"))<TFontProps>`
  font-size: 1.25rem;
  font-family: DroidSans, sans-serif;
  color: ${props => props.theme.font.caption};
  font-weight: normal;
`

export const Text = styled(Font.withComponent("span"))<TFontProps>`
  color: ${props => props.theme.font.text};
  font-size: 1rem;
  margin: 0;
`


export const Bold = styled(Font.withComponent("strong"))<TFontProps>`
  font-size: 1rem;
  color: ${props => props.theme.font.text};
  font-weight: bold;
`

export const Paragraph = styled(Font.withComponent("p"))<TFontProps & {size?: string, legacy?: boolean}>`
  color: ${props => props.theme.font.text};
  
  ${({size}) => size && css`
    font-size: ${size};
  `}
  
  ${props => props.legacy && css`
    margin-top: 0.94rem;
  `}
  font-weight: normal;
`


export const Tiny = styled(Font.withComponent("span"))<TFontProps>`
  color: ${props => props.theme.font.tiny};
  margin: 0;
  font-size: 0.75rem;
`
