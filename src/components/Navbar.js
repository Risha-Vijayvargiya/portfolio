import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';

const Navbar = ({data}) => {
    console.log(data);
    const {name, profession} = data;
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className={styles.flex__container}> 
                    <Link to="/">
                        <div className={styles.circle}></div>
                    </Link>
                    <Link to="/" className={styles.link}>
                        <h4 className={styles.text}>{name}</h4>
                    </Link>
                    <p className={styles.text}>{profession}</p>
                </div>
                <div className={styles.flex__container}>
                    <Link to="/education" className={styles.link}>
                        <p className={styles.text__link}>Education</p>
                    </Link>
                    <p className={styles.text}>|</p>
                    <Link to="/skills" className={styles.link}>
                        <p className={styles.text__link}>Skills</p>
                    </Link>
                    <p className={styles.text}>|</p>
                    <Link to="/projects" className={styles.link}>
                        <p className={styles.text__link}>Projects</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
} 

export default Navbar;