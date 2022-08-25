import React from 'react'
import Interactive from '../../mobile/image-interactive.jpg'
import InteractiveD from '../../desktop/image-interactive.jpg'
import styles from './Leader.module.css'

const Leader = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leader}>
            <div className={styles.image}>
                <img className={styles.mobile} src={Interactive} alt="Guy wearging VR" />
                <img className={styles.img_desktop} src={InteractiveD} alt="Guy wearing VR" />
            </div>
            <div className={styles.text}>
                <h2>the leader in interactive vr</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
        </div>
    </div>
  )
}

export default Leader