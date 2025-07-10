'use client'
import React from 'react';
import styles from "./Header.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function Header() {
    return (
        <>
            <nav className={styles.navbar}>
                <a href={`${base}/`}>Home</a>
                <a href={`${base}/about/`}>About</a>
                <a href={`${base}/projects/`}>Projects</a>
                <a href={`${base}/skills/`}>Skills</a>
                <a href={`${base}/contact/`}>Contact Me</a>
            </nav>
        </>
    );
}
