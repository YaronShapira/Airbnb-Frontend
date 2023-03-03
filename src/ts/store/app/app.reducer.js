export const SET_IS_MOBILE = 'SET_IS_MOBILE'

const initialState = {
    isMobile: window.innerWidth <= 750,
}

export function appReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_IS_MOBILE:
            return { ...state, isMobile: action.isMobile }

        default:
            return { ...state }
    }
}
