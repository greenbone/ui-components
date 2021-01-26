export namespace Colors {
    namespace white {
        const normal: string;
    }
    namespace black {
        const normal_1: string;
        export { normal_1 as normal };
    }
    namespace grey {
        export const _15: string;
        export const lighter: string;
        export const light: string;
        export const lightNormal: string;
        const normal_2: string;
        export { normal_2 as normal };
        export const dark: string;
        export const darker: string;
    }
    namespace blue {
        const light_1: string;
        export { light_1 as light };
        const normal_3: string;
        export { normal_3 as normal };
        export const _150: string;
        const dark_1: string;
        export { dark_1 as dark };
        export const _250: string;
        const darker_1: string;
        export { darker_1 as darker };
    }
    namespace green {
        const light_2: string;
        export { light_2 as light };
        const normal_4: string;
        export { normal_4 as normal };
        const dark_2: string;
        export { dark_2 as dark };
        const darker_2: string;
        export { darker_2 as darker };
    }
    namespace yellow {
        const light_3: string;
        export { light_3 as light };
        const normal_5: string;
        export { normal_5 as normal };
        const dark_3: string;
        export { dark_3 as dark };
    }
    namespace orange {
        const light_4: string;
        export { light_4 as light };
        const normal_6: string;
        export { normal_6 as normal };
        const dark_4: string;
        export { dark_4 as dark };
    }
    namespace red {
        const light_5: string;
        export { light_5 as light };
        const normal_7: string;
        export { normal_7 as normal };
        const dark_5: string;
        export { dark_5 as dark };
        const darker_3: string;
        export { darker_3 as darker };
    }
}
export namespace ColorTheme {
    export namespace spinner {
        import background = light;
        export { background };
        import foreground = normal;
        export { foreground };
    }
    export namespace alerts {
        namespace success {
            import background_1 = normal;
            export { background_1 as background };
            import foreground_1 = normal;
            export { foreground_1 as foreground };
        }
        namespace error {
            import background_2 = dark;
            export { background_2 as background };
            import foreground_2 = normal;
            export { foreground_2 as foreground };
        }
        namespace warning {
            import background_3 = normal;
            export { background_3 as background };
            import foreground_3 = normal;
            export { foreground_3 as foreground };
        }
        namespace info {
            import background_4 = dark;
            export { background_4 as background };
            import foreground_4 = normal;
            export { foreground_4 as foreground };
        }
    }
    export namespace login {
        const text: string;
        const screenBackgroundColor: string;
        const illustrationContrastColor: string;
        const footerTextColor: string;
        const footerBackgroundColor: string;
        const languageSelectActiveColor: string;
        const languageSelectInactiveColor: string;
    }
    export namespace alertBox {
        export namespace error_1 {
            import top = normal;
            export { top };
            const background_5: string;
            export { background_5 as background };
            import text_1 = normal;
            export { text_1 as text };
        }
        export { error_1 as error };
        export namespace success_1 {
            import top_1 = normal;
            export { top_1 as top };
            const background_6: string;
            export { background_6 as background };
            import text_2 = normal;
            export { text_2 as text };
        }
        export { success_1 as success };
        export namespace warning_1 {
            import top_2 = normal;
            export { top_2 as top };
            import background_7 = light;
            export { background_7 as background };
            import text_3 = normal;
            export { text_3 as text };
        }
        export { warning_1 as warning };
        export namespace info_1 {
            import top_3 = normal;
            export { top_3 as top };
            const background_8: string;
            export { background_8 as background };
            import text_4 = normal;
            export { text_4 as text };
        }
        export { info_1 as info };
    }
    export namespace input {
        import borderBottomColor = dark;
        export { borderBottomColor };
        import label = dark;
        export { label };
    }
    export namespace checkbox {
        import color = light;
        export { color };
    }
    export namespace background_9 {
        import light_6 = light;
        export { light_6 as light };
        import normal_8 = normal;
        export { normal_8 as normal };
        import dark_6 = dark;
        export { dark_6 as dark };
        import darker_4 = darker;
        export { darker_4 as darker };
    }
    export { background_9 as background };
    export namespace navbar {
        import background_10 = light;
        export { background_10 as background };
        import font = normal;
        export { font };
    }
    export namespace sidebar {
        export const hoverBackground: string;
        import hoverFont = normal;
        export { hoverFont };
        const background_11: string;
        export { background_11 as background };
        export const activeMenu: string;
        export const activeMenuitem: string;
        export const staticItem: string;
        import staticItemFont = normal;
        export { staticItemFont };
        import font_1 = normal;
        export { font_1 as font };
        export const border: string;
        export const insetShadow: string;
    }
    export namespace font_2 {
        export const headline: string;
        export const subheadline: string;
        export const caption: string;
        export const textlink: string;
        const text_5: string;
        export { text_5 as text };
        import tiny = light;
        export { tiny };
    }
    export { font_2 as font };
    export namespace button {
        export namespace normal_9 {
            const text_6: string;
            export { text_6 as text };
            const background_12: string;
            export { background_12 as background };
            export const hover: string;
            import disabled = light;
            export { disabled };
        }
        export { normal_9 as normal };
        export namespace abort {
            import text_7 = normal;
            export { text_7 as text };
            import background_13 = light;
            export { background_13 as background };
            import hover_1 = normal;
            export { hover_1 as hover };
            import disabled_1 = light;
            export { disabled_1 as disabled };
        }
        export namespace icon {
            const background_14: string;
            export { background_14 as background };
            import hover_2 = lighter;
            export { hover_2 as hover };
            import active = light;
            export { active };
        }
    }
    export namespace searchable {
        const primary25: string;
        const primary50: string;
        const primary75: string;
        const primary: string;
    }
    export namespace severity {
        import info_2 = normal;
        export { info_2 as info };
        import warning_2 = normal;
        export { warning_2 as warning };
        import high = normal;
        export { high };
        import critical = dark;
        export { critical };
    }
    export namespace error_2 {
        const color_1: string;
        export { color_1 as color };
        import background_15 = normal;
        export { background_15 as background };
    }
    export { error_2 as error };
    export const bordered: boolean;
    export const base: string;
}
export namespace Theme {
    namespace _default {
        import color_2 = dark;
        export { color_2 as color };
        const font_3: string;
        export { font_3 as font };
        const background_16: string;
        export { background_16 as background };
    }
    export { _default as default };
    export namespace info_3 {
        import backgroundColor = light;
        export { backgroundColor };
        export const foregroundColor: string;
    }
    export { info_3 as info };
    export namespace success_2 {
        import backgroundColor_1 = normal;
        export { backgroundColor_1 as backgroundColor };
        const foregroundColor_1: string;
        export { foregroundColor_1 as foregroundColor };
    }
    export { success_2 as success };
    export namespace warning_3 {
        import backgroundColor_2 = normal;
        export { backgroundColor_2 as backgroundColor };
        const foregroundColor_2: string;
        export { foregroundColor_2 as foregroundColor };
    }
    export { warning_3 as warning };
    export namespace error_3 {
        import backgroundColor_3 = normal;
        export { backgroundColor_3 as backgroundColor };
        const foregroundColor_3: string;
        export { foregroundColor_3 as foregroundColor };
    }
    export { error_3 as error };
    export namespace action {
        import backgroundColor_4 = dark;
        export { backgroundColor_4 as backgroundColor };
        const foregroundColor_4: string;
        export { foregroundColor_4 as foregroundColor };
    }
    export namespace severity_1 {
        import info_4 = info;
        export { info_4 as info };
        import warning_4 = warning;
        export { warning_4 as warning };
        import high_1 = high;
        export { high_1 as high };
        import critical_1 = critical;
        export { critical_1 as critical };
    }
    export { severity_1 as severity };
}
