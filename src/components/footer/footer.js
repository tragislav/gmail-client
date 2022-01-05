import React from 'react';
import { Link } from 'react-router-dom';

import logotype from '../../images/logotype2.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to={'/'} title="menu">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="menu">
                            Policies
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="menu">
                            Site Map
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="menu">
                            Help
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="menu">
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="rights clearfix">
                <img src={logotype} className="pull-left" alt="logotype" />
                <p>&copy;2015. Qulix Systems. All rights reserved.</p>
            </div>
        </footer>
    );
}
