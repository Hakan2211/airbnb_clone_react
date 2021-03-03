
import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'

import classes from './Header.module.css'


const Header = () => {
    return (
        <div className={classes.header}>
            <Link to='/'>
                <img
                    className={classes.header__icon} 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                    alt="Airbnb Logo"
                />
            </Link> 

            <div className={classes.header__center}>
                <input type="text"/>
                <SearchIcon />
            </div>

            <div className={classes.header__right}>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
