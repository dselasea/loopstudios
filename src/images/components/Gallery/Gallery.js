import React from 'react'
import styles from './Gallery.module.css'
import Earth from '../../mobile/image-deep-earth.jpg'
import EarthD from '../../desktop/image-deep-earth.jpg'
import Night from '../../mobile/image-night-arcade.jpg'
import NightD from '../../desktop/image-night-arcade.jpg'
import Soccer from '../../mobile/image-soccer-team.jpg'
import SoccerD from '../../desktop/image-soccer-team.jpg'
import Grid from '../../mobile/image-grid.jpg'
import GridD from '../../desktop/image-grid.jpg'
import Above from '../../mobile/image-from-above.jpg'
import AboveD from '../../desktop/image-from-above.jpg'
import Pocket from '../../mobile/image-pocket-borealis.jpg'
import PocketD from '../../desktop/image-pocket-borealis.jpg'
import Curiosity from '../../mobile/image-curiosity.jpg'
import CuriosityD from '../../desktop/image-curiosity.jpg'
import Fisheye from '../../mobile/image-fisheye.jpg'
import FisheyeD from '../../desktop/image-fisheye.jpg'

const Gallery = () => {
  return (
    <div className={styles.container}>
        <div className={styles.gallery}>
            <div>
                <img className={styles.image} src={Earth} alt="Image of Earth" />
                <img className={styles.imageD} src={EarthD} alt="Image of Earth" />
                <h4 className={styles.title}>Deep Earth</h4>
            </div>
            <div>
                <img className={styles.image} src={Night} alt="Night Arcade" />
                <img className={styles.imageD} src={NightD} alt="Night Arcade" />
                <h4 className={styles.title}>Night arcade</h4>
            </div>
            <div>
                <img className={styles.image} src={Soccer} alt="Player Playing Soccer" />
                <img className={styles.imageD} src={SoccerD} alt="Player Playing Soccer" />
                <h4 className={styles.title}>soccer team vr</h4>
            </div>
            <div>
                <img className={styles.image} src={Grid} alt="The Grid" />
                <img className={styles.imageD} src={GridD} alt="The Grid" />
                <h4 className={styles.title}>The grid</h4>
            </div>
            <div>
                <img className={styles.image} src={Above} alt="An up above VR Image" />
                <img className={styles.imageD} src={AboveD} alt="An up above VR Image" />
                <h4 className={styles.title}>From up above vr</h4>
            </div>
            <div>
                <img className={styles.image} src={Pocket} alt="Pocket Borealis" />
                <img className={styles.imageD} src={PocketD} alt="Pocket Borealis" />
                <h4 className={styles.title}>Pocket Borealis</h4>
            </div>
            <div>
                <img className={styles.image} src={Curiosity} alt="Curiosity Rover" />
                <img className={styles.imageD} src={CuriosityD} alt="Curiosity Rover" />
                <h4 className={styles.title}>The curiosity</h4>
            </div>
            <div>
                <img className={styles.image} src={Fisheye} alt="Fisheye" />
                <img className={styles.imageD} src={FisheyeD} alt="Fisheye" />
                <h4 className={styles.title}>Make it fisheye</h4>
            </div>
        </div>
        <button className={styles.btn}>See All</button>
    </div>
  )
}

export default Gallery