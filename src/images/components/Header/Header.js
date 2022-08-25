import React from 'react'
import styles from './Header.module.css'
import Logo from '../../../images/logo.svg'
import Hamburger from '../../../images/icon-hamburger.svg'
import Close from '../../../images/icon-close.svg'

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
            <div className={styles.toggle}>
            <img src={Hamburger} alt="Hamburger" />
            <img src={Close} alt="Close Menu" />
            </div>
            </nav>

            <h1 className={styles.heading}><span className={styles.brk1}>Immersive</span> <span className={styles.brk1}>experiences</span> <span className={styles.brk2}>that</span> deliver</h1>
        </div>
    </header>
  )
}
