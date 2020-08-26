import React from "react";
import './header.css'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={'header'}>
            <p className={'logo'}>FACEMASH</p>
            <Link to={'/top10'}>
                <p className={'top100'}>Top 100</p>
            </Link>
        </div>
    )
}

export default Header
