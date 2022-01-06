import React from "react";
import ReactRoundedImage from "react-rounded-image";
import styles from './Home.module.css';

const Home = ({data}) => {
    const {about} = data;
    // const {profilePicture} = data.fields.file;
    return (
        <div className={styles.flex__container}>
            <div className={styles.circle__image}></div>
            {/* <ReactRoundedImage image={profilePicture}/> */}
            {/* <img src={profilePicture}/> */}
            <div>
                <div>
                    <span className={styles.span}>Hello</span>
                    <h4>A Bit About Me</h4>
                    <div style={{width:"500px"}}>
                        <p style={{fontSize:"smaller"}}>{about}</p>
                    </div>
                </div>
                <div className={styles.flex__inner__container}>
                    <div className={styles.circle} id={styles.circle1}>Education</div>
                    <div className={styles.circle} id={styles.circle2}>Skills</div>
                    <div className={styles.circle} id={styles.circle3}>Projects</div>
                </div>
            </div>
        </div>
    )
}

export default Home;