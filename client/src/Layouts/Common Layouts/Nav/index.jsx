import React from 'react'
import style from "./index.module.scss"
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav id={style.Nav}>
      <div className={style.container}>
        <h2 className={style.Logo}> Floral Studio</h2>
        <ul className={style.navList}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/add"}>Add</NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"}>Wishlist</NavLink>
          </li>
          <li>
            <Link>Portfolio</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav