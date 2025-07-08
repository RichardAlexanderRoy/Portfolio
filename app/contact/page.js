import React from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/MainOuter.js";
import MainInner from "../components/MainInner.js";

export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MainOuter title="Get in touch with me!">
                    <MainInner>
                        <h2>Email: <span>richard.alex.roy@gmail.com</span></h2>
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};