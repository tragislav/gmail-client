import React from 'react';

import Heading from '../heading';
import Message from '../message';
import SearchForm from '../searchForm';
import Footer from '../footer';

function Main({ messages, folder }) {
    let counterValue = 0;

    if (!messages[folder].length) {
        return <div>Пожалуйста, авторизуйтесь в систему</div>;
    }

    return (
        <section className="mainSection">
            <Heading />
            <SearchForm />
            <section className="postsContainer">
                {messages[folder].map((item) => {
                    counterValue++;
                    return (
                        <Message
                            message={item}
                            key={item.id}
                            arrayNumber={counterValue - 1}
                            folder={folder}
                        />
                    );
                })}
                <Footer />
            </section>
        </section>
    );
}

export default Main;
