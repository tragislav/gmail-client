import React from 'react';

import Heading from '../heading';
import Message from '../message';
import SearchForm from '../searchForm';
import Footer from '../footer';

function Main({ messages }) {
    let counterValue = 0;

    if (!messages.messages.length) {
        return <div>Пожалуйста, авторизуйтесь в систему</div>;
    }

    return (
        <section className="mainSection">
            <Heading />
            <SearchForm />
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
                <Footer />
            </section>
        </section>
    );
}

export default Main;
