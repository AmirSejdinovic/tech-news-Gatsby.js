import React from 'react'
import {Link } from 'gatsby'
import * as headerStyles from './Header.module.scss';

export default function Header(){
  return(
    <div>
      <h1 className={headerStyles.headerTitle}>I am header</h1>
      <h3 className={headerStyles.headerSub}>Header subtite</h3>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/blogsss">no egsizt</Link>
    </div>
  )
}