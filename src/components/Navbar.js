import React from "react";
import styles from './Navbar.module.css';

const Navbar = ({data}) => {
    console.log(data);
    // console.log('hello', data[0].fields.name);
    const {name, profession} = data;
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className={styles.flex__container}> 
                    <div className={styles.circle}></div>
                    <h4 className={styles.text}>{name}</h4>
                    <p className={styles.text}>{profession}</p>
                </div>
                <div className={styles.flex__container}>
                    <p className={styles.text}>Education</p>
                    <p className={styles.text}>|</p>
                    <p className={styles.text}>Skills</p>
                    <p className={styles.text}>|</p>
                    <p className={styles.text}>Projects</p>
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