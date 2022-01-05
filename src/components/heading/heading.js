import React from 'react';
import { Link } from 'react-router-dom';

export default function Heading() {
    return (
        <div className="heading">
            <h1>Page title in</h1>
            <div className="dropdown">
                <Link
                    to={'/'}
                    className="dropdown-toggle dropdownMenu2"
                    data-toggle="dropdown"
                    aria-expanded="true"
                >
                    <span>New York</span>
                    <i className="icon-down-open"></i>
                </Link>
                <ul
                    className="dropdown-menu"
                    role="menu"
                    aria-labelledby="dropdownMenu2"
                >
                    <li role="presentation">
                        <Link to={'/'} role="menuitem" tabIndex="-1">
                            Moscow
                        </Link>
                    </li>
                    <li role="presentation">
                        <Link to={'/'} role="menuitem" tabIndex="-1">
                            Minsk
                        </Link>
                    </li>
                    <li role="presentation">
                        <Link to={'/'} role="menuitem" tabIndex="-1">
                            Tokio
                        </Link>
                    </li>
                    <li role="presentation">
                        <Link to={'/'} role="menuitem" tabIndex="-1">
                            Barcelona
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
