import React from 'react';
import styles from "../page.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function Footer() {
    return (
        <div>
            <nav className="Nav">
                <a href={`${base}/about/`}>About</a>
            </nav>
        </div>
    );
}
