import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getMessagesCreds, search } from '../../redux/gmailAPIReducer/actions';

export default function SearchForm() {
    const dispatch = useDispatch();
    return (
        <div className="searchForm row">
            <div className="col-sm-14">
                <form
                    name="search"
                    action="#"
                    method="get"
                    className="form-inline form-search pull-left"
                >
                    <div className="input-group">
                        <input
                            onChange={(e) => {
                                console.log(e.target.value);
                                dispatch(search(e.target.value));
                                dispatch(getMessagesCreds());
                            }}
                            className="form-control"
                            type="text"
                            name="search"
                            placeholder="Search..."
                        />
                        <Link to={'/'} className="btn btn-search">
                            <i className="icon-search"></i>
                        </Link>
                    </div>
                </form>
            </div>

            <div className="options col-sm-10">
                <Link to={'/'} className="btn btn-sm btn-option">
                    <i className="icon-sliders"></i>
                </Link>
            </div>
        </div>
    );
}
