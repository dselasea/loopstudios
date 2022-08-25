import React from 'react'
import styles from './Header.module.css'

const Nav = ({navOpen}) => {
  return (
    <React.Fragment><ul className={navOpen ? [styles.nav_items, styles.active].join('') : [styles.nav_items]}>
    <li><a href="/">About</a></li>
    <li><a href="/">Careers</a></li>
    <li><a href="/">Events</a></li>
    <li><a href="/">Products</a></li>
    <li><a href="/">Support</a></li>
</ul></React.Fragment>
  )
}

export default Nav