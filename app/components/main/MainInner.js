import React from 'react';
import styles from "./mainInner.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function MainInner({children}) {
    return (
        <div className={styles.mainInner}>
            {children}
        </div>
    );
}