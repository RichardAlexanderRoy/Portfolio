import React from 'react';
import styles from "../page.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function MainOuter({children, title}) {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
}