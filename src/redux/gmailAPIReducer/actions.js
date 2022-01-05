import { GET_MESSAGE, GET_MESSAGES } from '../types';

export function getMessagesCreds() {
    return async (dispatch) => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {
                    Authorization: localStorage.token,
                },
            };
            const response = await fetch(
                'https://content.googleapis.com/gmail/v1/users/me/messages?maxResults=10',
                requestOptions
            );

            const result = await response.json();
            dispatch({ type: GET_MESSAGES, payload: result });
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
                    Authorization: localStorage.token,
                },
            };
            const response = await fetch(
                `https://content.googleapis.com/gmail/v1/users/me/messages/${id}`,
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
