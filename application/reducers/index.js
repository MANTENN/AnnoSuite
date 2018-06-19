import {
    INITIALIZE_APPLICATION
} from '../actions/application'

const initialState = {
    greeting: "Application is loading"
}

export function initializeApplication (state = initialState, action) {
    switch(action.type) {
        case INITIALIZE_APPLICATION:
            return {
                ...state,
                greeting: action.greeting
            }
        default:
            return state
    }
}