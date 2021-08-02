type TFlexWrap = "nowrap" | "wrap" | "wrap-reverse"

export type TFlexProps = {
    flexGrow? : number | "inherit" | "initial" | "revert" | "unset"
    justifyContent? : "center" | "start" | "end" | "flex-start" | "flex-end" | "left" | "right" | "normal" | "space-between" | "space-around" | "space-evenly" | "stretch" ,
    flexWrap?  : TFlexWrap
    wrap? : TFlexWrap
    alignItems? : "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end"
    full?: boolean,
    fullWidth? : boolean,
    center? : boolean,
    borderBox? : boolean
}