import { GET_MESSAGE, GET_MESSAGES } from '../types';

const initialState = {
    messagesCreds: {
        messages: [],
    },
    message: [],
};

export const gmailAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messagesCreds: action.payload,
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
