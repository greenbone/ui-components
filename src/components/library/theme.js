export const Colors = {
    white: {
        normal: "#f8f8f8"
    },
    black: {
        normal: "#0e0e10"
    },
    grey: {
        _15: "#f8f8f8",
        lighter: "#e6e6e6",
        light: "#c2c2c2",
        lightNormal: "#a1a1a1",
        normal: "#7F7F7F",
        dark: "#4C4C4C",
        darker: "#191919"
    },
    blue: {
        light: "#86B2DE",
        normal: "#4588CD",
        _150: "#236FB5",
        dark: "#265C96",
        _250: "#1E4579",
        darker: "#1B3059"
    },
    green: {
        light: "#66C430",
        normal: "#42801F",
        dark: "#0A5405",
        darker: "#21400F"
    },
    yellow: {
        light: "#FFE478",
        normal: "#FFD630",
        dark: "#FFBF05"
    },
    orange: {
        light: "#FFB56C",
        normal: "#FF8E1D",
        dark: "#FF710B"
    },
    red: {
        light: "#FF441F",
        normal: "#BF3317",
        dark: "#80220F",
        darker: "#401108"
    }
};


export const ColorTheme = {
    spinner: {
        background: Colors.grey.light,
        foreground: Colors.green.normal
    },
    alerts: {
        success: {background: Colors.green.normal, foreground: Colors.white.normal},
        error: {background: Colors.red.dark, foreground: Colors.white.normal},
        warning: {background: Colors.yellow.normal, foreground: Colors.black.normal},
        info: {background: Colors.blue.dark, foreground: Colors.white.normal}
    },
    login: {
        text: "#000",
        screenBackgroundColor: "#01cafc",
        illustrationContrastColor: "#005063",
        footerTextColor: "#ffffff",
        footerBackgroundColor: "#000000",
        languageSelectActiveColor: "#ffffff",
        languageSelectInactiveColor: "#000000"
    },
    alertBox: {
        error: {
            top: Colors.red.normal,
            background: "rgba(242,110,115,0.34)",
            text: Colors.black.normal
        },
        success: {
            top: Colors.green.normal,
            background: "rgb(210,210,210)",
            text: Colors.black.normal
        },
        warning: {
            top: Colors.orange.normal,
            background: Colors.yellow.light,
            text: Colors.black.normal
        },
        info: {
            top: Colors.yellow.normal,
            background: "rgb(210,210,210)",
            text: Colors.black.normal
        }
    },
    input: {
        borderBottomColor: Colors.grey.dark,
        label: Colors.grey.dark
    },
    checkbox: {
        color: Colors.green.light
    },
    background: {
        light: Colors.green.light,
        normal: Colors.green.normal,
        dark: Colors.green.dark,
        darker: Colors.green.darker
    },
    navbar: {
        background: Colors.green.light,
        font: Colors.black.normal
    },
    sidebar: {
        hoverBackground: "#d5d5d5",
        hoverFont: Colors.black.normal,
        background: "#fafafa",
        activeMenu: "#f0f0f0",
        activeMenuitem: "#d5d5d5",
        staticItem: "#f0f0f0",
        staticItemFont: Colors.black.normal,
        font: Colors.black.normal,
        border: "#e5e5e5",
        insetShadow: "#707070"
    },
    font: {
        headline: "#4c4c4d",
        subheadline: "#4c4c4d",
        caption: "#4c4c4d",
        textlink: "#4c4c4d",
        text: "#4c4c4d",
        tiny: Colors.grey.light
    },
    button: {
        normal: {
            text: "white",
            background: "#4c4c4d",
            hover: "#212121",
            disabled: Colors.grey.light
        },
        abort: {
            text: Colors.black.normal,
            background: Colors.grey.light,
            hover: Colors.grey.normal,
            disabled: Colors.grey.light
        },
        icon: {
            background: "transparent",
            hover: Colors.grey.lighter,
            active: Colors.grey.light
        }
    },
    searchable: {
        primary25: "rgb(211,211,211)",
        primary50: "rgb(189,189,189)",
        primary75: "rgb(163,163,163)",
        primary: "rgb(115,115,115)"
    },
    severity: {
        info: Colors.blue.normal,
        warning: Colors.orange.normal,
        high: Colors.red.normal,
        critical: Colors.red.dark
    },
    error: {
        color: "#F65656",
        background: Colors.white.normal
    },
    bordered: false,
    base: "#7EC14B"
};

export const Theme = {

    default: {
        color: Colors.grey.dark,
        font: "DroidSans, sans-serif",
        background: "#fafafa"
    },
    info: {
        backgroundColor: Colors.blue.light,
        foregroundColor: "#FFF"
    },
    success: {
        backgroundColor: Colors.green.normal,
        foregroundColor: "#FFF"
    },
    warning: {
        backgroundColor: Colors.orange.normal,
        foregroundColor: "#FFF"
    },
    error: {
        backgroundColor: Colors.red.normal,
        foregroundColor: "#FFF"
    },
    action: {
        backgroundColor: ColorTheme.background.dark,
        foregroundColor: "#FFF"
    },
    severity: {
        info: ColorTheme.severity.info,
        warning: ColorTheme.severity.warning,
        high: ColorTheme.severity.high,
        critical: ColorTheme.severity.critical
    }
};
