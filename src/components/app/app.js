import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../header';
import Main from '../main';

// import './styles/app.css';
// import './styles/main.less';
// import './styles/variables.less';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <div>
                    <Routes>
                        <Route exact path="/" element={<Main />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
