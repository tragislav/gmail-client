import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target=".bs-example-navbar-collapse-1"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to={'/'} title="Menu item">
                                Menu item
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} title="Menu item">
                                Menu item
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} title="Menu item">
                                Menu item
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} title="Menu item" className="active">
                                Menu item
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} title="Menu item">
                                Menu item
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
