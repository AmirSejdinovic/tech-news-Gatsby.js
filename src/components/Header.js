import React from 'react'
import {Link } from 'gatsby'

export default function Header(){
  return(
    <div>
      <h1>I am header</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/blogsss">no egsizt</Link>
    </div>
  )
}