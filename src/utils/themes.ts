export enum THEME_TYPE {
    DARK = 'dark',
    LIGHT = 'light'
}

export const themes = {
    [THEME_TYPE.LIGHT]: {
        foreground: "#000000",
        background: "bg-gray-50",
        backgroundLevel1: "bg-white",
        backgroundLevel2: "bg-gray-100"
    },
    [THEME_TYPE.DARK]: {
        foreground: "#ffffff",
        background: "bg-tauple-100",
        backgroundLevel1: "bg-tauple-200",
        backgroundLevel2: "bg-tauple-300"
    }
}