import React from "react"
import {Button, LinkButton} from "./index"

export default {title: "Button"}


export const button = () => <Button>Button</Button>
export const disabled = () => <Button disabled>Disabled</Button>
export const twoButtons = () => <><Button>One</Button><Button>Two</Button></>
export const linkButton = () => <>
    <div style={{margin: "2rem"}}>

        <LinkButton>resend</LinkButton>
        <br/>
        <br/>
        <LinkButton disabled>resend</LinkButton>
    </div>
</>
