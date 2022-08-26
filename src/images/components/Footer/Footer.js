import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../../images/logo.svg'
import Facebook from '../../../images/icon-facebook.svg'
import Twitter from '../../../images/icon-twitter.svg'
import Pinterest from '../../../images/icon-pinterest.svg'
import Instagram from '../../../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
        <div className={styles.logo_links}>
            <img src={Logo} alt="Loop Studios Footer Logo" />
            <ul className={styles.menu}>
                <li><a href="/">About</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Support</a></li>
            </ul>
        </div>
        <div className={styles.social_links}>
            <div className={styles.social}>
                <img src={Facebook} alt="Facebook Logo" />
                <img src={Twitter} alt="Twitter Logo" />
                <img src={Pinterest} alt="Pinterest Logo" />
                <img src={Instagram} alt="Instagram Logo" />
            </div>
            <p>&copy; 2022 Loopstudios. All rights reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer