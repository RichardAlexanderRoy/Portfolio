import React from 'react';
import styles from "./mainOuter.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function MainOuter({children, title, id}) {
    return (
        <div {...(id ? { id } : {})} className={styles.mainOuter}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    );
}