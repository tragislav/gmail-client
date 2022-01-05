import React from 'react';
import { Link } from 'react-router-dom';

export default function Submenu() {
    return (
        <aside className="submenu">
            <section className="submenuSection">
                <ul className="nav">
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 7d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 5d
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="submenuSection">
                <h4 className="submenuCategory">Submenu</h4>
                <ul className="nav">
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 7d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 2d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 4d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            More tags
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="submenuSection">
                <h4 className="submenuCategory">Submenu</h4>
                <ul className="nav">
                    <li>
                        <Link to={'/'} title="Submenu" className="active">
                            Submenu item 1d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 1d
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="submenuSection">
                <h4 className="submenuCategory">Submenu</h4>
                <ul className="nav">
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 4d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 2d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item1 &amp; Submenu2 2d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 7d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 1d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 1d
                        </Link>
                    </li>
                </ul>
            </section>

            <section className="submenuSection">
                <h4 className="submenuCategory">Submenu</h4>
                <ul className="nav">
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 2d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 1d
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} title="Submenu">
                            Submenu item 3d
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
    );
}
