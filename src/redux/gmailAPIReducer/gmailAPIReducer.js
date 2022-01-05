import { GET_MESSAGE, GET_MESSAGES } from '../types';

const initialState = {
    messages: {
        messages: [],
    },
    message: [],
};

export const gmailAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
            };
        case GET_MESSAGE:
            return {
                ...state,
                message: [...state.message, action.payload],
            };
        default:
            return state;
    }
};
