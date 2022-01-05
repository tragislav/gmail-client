import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages } from '../../redux/gmailAPIReducer/actions';
import Message from '../message';

function Main() {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.gmailAPI.messages);

    if (!messages.messages.length) {
        return (
            <button onClick={() => dispatch(getMessages())}>загрузить</button>
        );
    }
    return messages.messages.map((item) => {
        return <Message message={item} key={item.id} />;
    });
}

export default Main;
