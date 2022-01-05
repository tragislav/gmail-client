import { GET_DRAFTS, GET_MESSAGE, GET_MESSAGES, SEARCH } from '../types';

const initialState = {
    messagesCreds: {
        messages: [],
    },
    draftsCreds: {
        drafts: [],
    },
    search: '',
    message: [],
};

export const gmailAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                search: action.payload,
            };
        case GET_MESSAGES:
            return {
                ...state,
                messagesCreds: action.payload,
            };
        case GET_DRAFTS:
            return { ...state, draftsCreds: action.payload };
        case GET_MESSAGE:
            if (!state.search.trim()) {
                return {
                    ...state,
                    message: [...state.message, action.payload],
                };
            } else {
                return {
                    ...state,
                    message: [
                        ...state.message,
                        action.payload.title.indexOf(state.search)
                            ? action.payload
                            : null,
                    ],
                };
            }
        default:
            return state;
    }
};
