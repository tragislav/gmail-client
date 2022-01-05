import React from 'react';
import Message from '../message';

function Main({ messages }) {
    let counterValue = 0;

    if (!messages.messages.length) {
        return <div>Пожалуйста, авторизуйтесь в систему</div>;
    }

    return (
        <section className="mainSection">
            <section className="postsContainer">
                {messages.messages.map((item) => {
                    counterValue++;
                    return (
                        <Message
                            message={item}
                            key={item.id}
                            arrayNumber={counterValue - 1}
                        />
                    );
                })}
            </section>
        </section>
    );
}

export default Main;
