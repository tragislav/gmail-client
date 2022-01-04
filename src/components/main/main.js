import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages, getMessage } from '../../redux/gmailAPIReducer/actions';
import Message from '../message';

function Main() {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.gmailAPI.messages);
    const message = useSelector((state) => state.gmailAPI.message);

    if (!messages.messages.length) {
        return (
            <button onClick={() => dispatch(getMessages())}>загрузить</button>
        );
    }
    // console.log(allMessages(messages));
    return messages.messages.map((item) => {
        // dispatch(getMessage(item.id));
        return <Message message={item} key={item.id} />;
    });
}

export default Main;
