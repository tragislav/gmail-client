import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="logoBlock">
                        <Link to={'/'}>
                            <img
                                src="/public/images/logotype.png"
                                className="logo"
                                title="Logo"
                                alt="logo"
                            />
                            <img
                                src="/public/images/logotypeMobile.png"
                                className="logoMobile"
                                alt="logoMobile"
                            />
                        </Link>
                        <span>Page title</span>
                    </div>
                    <div className="header-comp pull-right">
                        <div className="dropdown">
                            <Link
                                to={'/'}
                                className="dropdown-toggle dropdownMenu1"
                                data-toggle="dropdown"
                                aria-expanded="true"
                            >
                                <span>New York</span>
                                <i className="icon-down-open"></i>
                            </Link>
                            <ul
                                className="dropdown-menu"
                                role="menu"
                                aria-labelledby="dropdownMenu1"
                            >
                                <li role="presentation">
                                    <Link
                                        role="menuitem"
                                        tabIndex="-1"
                                        to={'/'}
                                    >
                                        Moscow
                                    </Link>
                                </li>
                                <li role="presentation">
                                    <Link
                                        role="menuitem"
                                        tabIndex="-1"
                                        to={'/'}
                                    >
                                        Minsk
                                    </Link>
                                </li>
                                <li role="presentation">
                                    <Link
                                        role="menuitem"
                                        tabIndex="-1"
                                        to={'/'}
                                    >
                                        Tokio
                                    </Link>
                                </li>
                                <li role="presentation">
                                    <Link
                                        role="menuitem"
                                        tabIndex="-1"
                                        to={'/'}
                                    >
                                        Barcelona
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <Link to={'/'} className="btn btn-sm btn-header">
                            <i className="headerIcon icon-bell"></i>
                        </Link>
                        <Link to={'/'} className="btn btn-sm btn-header">
                            <i className="headerIcon icon-mail"></i>
                        </Link>
                        <Link to={'/'} className="profile">
                            <span>User name</span>
                            <img
                                src="/public/images/profilePhoto.png"
                                alt="profilePhoto"
                            />
                        </Link>
                        <Link to={'/'} className="btn btn-xs btn-header">
                            <i className="headerIcon icon-search"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
