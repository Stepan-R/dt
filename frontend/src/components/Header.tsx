import React from 'react';
import classes from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link to='/' className={classes.home_block}>
        <img src='/home.png' alt='home' className={classes.home}/>
      </Link>
    </header>
  )
}