import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

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
                    <Link to="/">
                        <h4 className={styles.text} id={styles.link}>{name}</h4>
                    </Link>
                    <p className={styles.text}>{profession}</p>
                </div>
                <div className={styles.flex__container}>
                    <p className={styles.text__link}>Education</p>
                    <p className={styles.text}>|</p>
                    <p className={styles.text__link}>Skills</p>
                    <p className={styles.text}>|</p>
                    <p className={styles.text__link}>Projects</p>
                </div>
                {/* <Link to="/cart"> */}
                {/* <button type="button" class="btn btn-primary position-relative">
                Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {0}
                <span class="visually-hidden">No. of Items</span>
                </span>
                </button> */}
                {/* </Link> */}
            </div>
        </nav>
    );
} 

export default Navbar;