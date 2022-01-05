import React from 'react';
import { Link } from 'react-router-dom';

export default function Submenu() {
    return (
        <aside className="submenu">
            <section className="submenuSection">
                <h4 className="submenuCategory">Folders</h4>
                <ul className="nav">
                    <li>
                        <Link to={'/messages'} title="Submenu">
                            Messages
                        </Link>
                    </li>
                    <li>
                        <Link to={'/drafts'} title="Submenu">
                            Drafts
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
    );
}
