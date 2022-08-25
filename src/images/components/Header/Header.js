import React, { useState } from 'react'
import styles from './Header.module.css'
import Logo from '../../../images/logo.svg'
import Hamburger from '../../../images/icon-hamburger.svg'
import Close from '../../../images/icon-close.svg'
import Nav from './Nav'

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div  className={styles.nav}>
            <img src={Logo} alt="Loop Studios Logo" className={styles.logo}/>
            <nav>
            <Nav navOpen={navOpen}/>
            </nav>
            <div className={styles.toggle} onClick={() => setNavOpen(!navOpen)}>
                {navOpen ? <img src={Close} alt="Close Menu" /> : <img src={Hamburger} alt="Hamburger" />}
            </div>
            </div>

            <h1 className={styles.heading}><span className={styles.brk1}>Immersive</span> <span className={styles.brk1}>experiences</span> <span className={styles.brk2}>that</span> deliver</h1>
        </div>
    </header>
  )
}
