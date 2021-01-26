import React from "react";
import {
    Caption as CaptionComponent,
    Headline as HeadlineComponent,
    Paragraph as PragraphComponent,
    Subheadline as SubheadlineComponent,
    Text as TextComponent,
    Tiny as TinyComponent
} from "./index";


export default {title: "Font"};


export const Headline = () => <HeadlineComponent>Headline</HeadlineComponent>;
export const Subheadline = () => <SubheadlineComponent>Subheadline</SubheadlineComponent>;
export const Caption = () => <CaptionComponent>Caption</CaptionComponent>;
export const Text = () => <TextComponent>Text</TextComponent>;
export const Tiny = () => <TinyComponent>Tiny</TinyComponent>;
export const Paragraph = () => <PragraphComponent>Paragraph</PragraphComponent>;
