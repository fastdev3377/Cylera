export enum THEME_ACTIONS {
    DARK_MODE = 'DARK_MODE',
    LIGHT_MODE = 'LIGHT_MODE'
}

export interface ThemeAction {
    type: THEME_ACTIONS
}

interface ThemeState {
    mode: string;
}

const themeReducer = (state: ThemeState, action:ThemeAction) => {
    switch(action.type) {
        case THEME_ACTIONS.DARK_MODE:
            return {
                mode: "dark"
            }
        case THEME_ACTIONS.LIGHT_MODE:
            return {
                mode: "light"
            }
        default:
            return state;
    }
}

export default themeReducer;