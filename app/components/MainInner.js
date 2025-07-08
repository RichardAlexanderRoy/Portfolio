import React from 'react';
import styles from "../page.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function MainInner({children}) {
    return (
        <div>
            {children}
        </div>
    );
}