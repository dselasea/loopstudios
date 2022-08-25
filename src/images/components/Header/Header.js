import React from 'react'
import styles from './Header.module.css'
import Logo from '../../../images/logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <nav className={styles.nav}>
            <img src={Logo} alt="Loop Studios Logo" />
            <ul className={styles.nav_items}>
                <li><a href="/">About</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Support</a></li>
            </ul>
            </nav>
        </div>
    </header>
  )
}
