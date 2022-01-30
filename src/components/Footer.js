import React from "react";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div>
            <hr/>
            <div className={styles.flex__container}>
                <div className={styles.flex__outer__container}>
                    <h6>Phone</h6>
                    <p>123456789</p>
                </div>
                <div>
                    <h6>Email</h6>
                    <p>risha.vijayvargiya@gmail.com</p>
                </div>
                <div className={styles.flex__outer__container}>
                    <h6>Follow Me</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;