import React from "react";
import {
    Caption as CaptionComponent,
    Headline as HeadlineComponent,
    Paragraph as ParagraphComponent,
    Subheadline as SubheadlineComponent,
    Text as TextComponent,
    Tiny as TinyComponent
} from "./Font";


export default {title: "Font"};


export const Headline = () => <HeadlineComponent>Headline</HeadlineComponent>;
export const Subheadline = () => <SubheadlineComponent>Subheadline</SubheadlineComponent>;
export const Caption = () => <CaptionComponent>Caption</CaptionComponent>;
export const Text = () => <TextComponent>Text</TextComponent>;
export const Tiny = () => <TinyComponent>Tiny</TinyComponent>;
export const Paragraph = () => <ParagraphComponent>Paragraph</ParagraphComponent>;
