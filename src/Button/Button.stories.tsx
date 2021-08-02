// Generated with util/create-component.js
import React from "react";
import {Button,  LinkButton,AbortButton} from "./Button"


export default {
    title: "Button"
};

export const button = () => <Button>Button</Button>
export const disabled = () => <Button disabled>Disabled</Button>
export const Abort = () => <AbortButton>Ghost</AbortButton>
export const twoButtons = () => <><Button>One</Button><Button>Two</Button></>
export const linkButton = () => <>
    <div style={{margin: "2rem"}}>

        <LinkButton>resend</LinkButton>
        <br/>
        <br/>
        <LinkButton disabled>disabled</LinkButton>
    </div>
</>
