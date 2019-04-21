import { NEW_TODO, TOGGLE_COMPLETE } from '../actions'

const initialState = []

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_TODO:
            return [...state, {id: state.length + 1, title: action.title, complete: false}]
        case TOGGLE_COMPLETE:
            state[action.payload].complete = !state[action.payload].complete
            return state;
        default:
            return state;
    }
}