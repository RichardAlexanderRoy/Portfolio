'use client'
import React from 'react';
import styles from "../page.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

export default function Header() {
    return (
        <div>
            <nav className="Nav">
                <a href={`${base}/about/`}>About</a>
                <a href={`${base}/contact/`}>Contact Me</a>
            </nav>
        </div>
    );
}