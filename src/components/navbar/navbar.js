import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav class="navbar navbar-default navbar-top">
            <div class="container">
                <div class="navbar-header">
                    <button
                        type="button"
                        class="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target=".bs-example-navbar-collapse-1"
                    >
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
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
                            <Link to={'/'} title="Menu item" class="active">
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
