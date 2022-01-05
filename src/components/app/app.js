import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages } from '../../redux/gmailAPIReducer/actions';

import Header from '../header';
import Main from '../main';
import Navbar from '../navbar';

function App() {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.gmailAPI.messages);

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);

    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Navbar />
                <main class="container main">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Main messages={messages} />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
