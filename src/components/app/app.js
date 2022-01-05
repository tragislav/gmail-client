import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMessagesCreds } from '../../redux/gmailAPIReducer/actions';

import Header from '../header';
import Main from '../main';
import Navbar from '../navbar';

function App() {
    const dispatch = useDispatch();
    const messagesCreds = useSelector((state) => state.gmailAPI.messagesCreds);

    useEffect(() => {
        dispatch(getMessagesCreds());
    }, [dispatch]);

    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Navbar />
                <main className="container main">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Main messages={messagesCreds} />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
