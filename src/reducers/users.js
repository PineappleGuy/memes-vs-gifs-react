import {
    SET_USER,
    USER_ERRORS,
    CLEAR_USER,
    CLEAR_ERRORS,
    LOGGED_IN
} from '../actionTypes'

export default (state = { user: {}, errors: [], loggedIn: false }, action) => {
    switch (action.type) {

        case SET_USER:
            return { ...state, user: action.payload, loggedIn: true }

        // case LOGGED_IN:
        //     return { ...state, loggedIn: action.payload }

        case USER_ERRORS:
            // console.log(action.payload)
            return { ...state, errors: action.payload }

        case CLEAR_USER:
            return { ...state, user: null, loggedIn: false }

        case CLEAR_ERRORS:
            return { ...state, errors: [] }

        default:
            return state
    }
}