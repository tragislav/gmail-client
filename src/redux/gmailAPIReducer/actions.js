import { GET_DRAFTS, GET_MESSAGE, GET_MESSAGES, SEARCH } from '../types';

const BASE_URL = 'https://content.googleapis.com/gmail/v1/users/me';

export function getMessagesCreds() {
    return async (dispatch) => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {
                    Authorization: sessionStorage.token,
                },
            };
            const response = await fetch(
                `${BASE_URL}/messages?maxResults=10`,
                requestOptions
            );

            const result = await response.json();
            dispatch({ type: GET_MESSAGES, payload: result });
        } catch (error) {
            console.error(error);
        }
    };
}

export function getDraftsCreds() {
    return async (dispatch) => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {
                    Authorization: sessionStorage.token,
                },
            };
            const response = await fetch(
                `${BASE_URL}/drafts?maxResults=10`,
                requestOptions
            );

            const result = await response.json();
            dispatch({ type: GET_DRAFTS, payload: result });
        } catch (error) {
            console.error(error);
        }
    };
}

export function getMessages(id) {
    return async (dispatch) => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {
                    Authorization: sessionStorage.token,
                },
            };
            const response = await fetch(
                `${BASE_URL}/messages/${id}`,
                requestOptions
            );

            const json = await response.json();
            const result = _transformMessage(json);
            dispatch({ type: GET_MESSAGE, payload: result });
        } catch (error) {
            console.error(error);
        }
    };
}

export function search(str) {
    return { type: SEARCH, payload: str };
}

const _transformMessage = (message) => {
    return {
        id: message.id,
        snippet: message.snippet,
        date: message.payload.headers.find((item) => item.name === 'Date')
            .value,
        title: message.payload.headers.find((item) => item.name === 'Subject')
            .value,
        from: message.payload.headers.find((item) => item.name === 'From')
            .value,
    };
};
