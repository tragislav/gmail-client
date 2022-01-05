import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages } from '../../redux/gmailAPIReducer/actions';

import member from '../../images/member4.png';

export default function Message({ message, arrayNumber }) {
    const dispatch = useDispatch();
    const messageContent = useSelector((state) => state.gmailAPI.message);

    let messageInfo = useRef(null);

    useEffect(() => {
        dispatch(getMessages(message.id));
    }, [dispatch, message.id]);

    messageInfo = messageContent[arrayNumber];

    return (
        <section className="media">
            <div className="media-left">
                <Link to={'/'}>
                    <img className="media-object" src={member} alt="userpic" />
                </Link>
            </div>
            <div className="media-body">
                <div className="userInfo clearfix">
                    <span>{messageInfo ? messageInfo.from : null}</span>
                    <div className="commentsAndTime pull-right">
                        <span>
                            <i className="icon-clock"></i>
                            <time
                                className="timeago"
                                dateTime={messageInfo ? messageInfo.date : null}
                            >
                                {messageInfo ? messageInfo.date : null}
                            </time>
                        </span>
                    </div>
                </div>
                <div className="itemName">
                    <Link to={'/'} className="media-heading" title="Item title">
                        {messageInfo ? messageInfo.title : null}
                    </Link>
                    <span className="status pull-right hidden"></span>
                </div>
                <p>{messageInfo ? messageInfo.snippet : null}</p>
                <div className="tags">
                    <button type="submit" className="btn btn-tag">
                        <i className="icon-tag"></i>
                    </button>
                    <Link to={'/'} className="tag" title="tag">
                        tag1
                    </Link>
                    <Link to={'/'} className="tag" title="tag">
                        tag2
                    </Link>
                    <Link to={'/'} className="tag" title="tag">
                        tag3
                    </Link>
                </div>
            </div>
        </section>
    );
}
