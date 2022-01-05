import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    getMessagesCreds,
    getDraftsCreds,
} from '../../redux/gmailAPIReducer/actions';

import Header from '../header';
import Main from '../main';
import Navbar from '../navbar';
import Submenu from '../submenu';

function App() {
    const dispatch = useDispatch();
    const messagesCreds = useSelector((state) => state.gmailAPI.messagesCreds);
    const draftsCreds = useSelector((state) => state.gmailAPI.draftsCreds);

    useEffect(() => {
        dispatch(getMessagesCreds());
        dispatch(getDraftsCreds());
    }, [dispatch]);

    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Navbar />
                <main className="container main">
                    <Submenu />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <Main
                                    messages={messagesCreds}
                                    folder={'messages'}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/drafts"
                            element={
                                <Main
                                    messages={draftsCreds}
                                    folder={'drafts'}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/messages"
                            element={
                                <Main
                                    messages={messagesCreds}
                                    folder={'messages'}
                                />
                            }
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
