import React from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/MainOuter.js";
import MainInner from "../components/MainInner.js";


export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MainOuter title="About Me:">
                    <MainInner>
                        <h1>Education:</h1>
                    </MainInner>
                    <MainInner>
                        <h1>Work Experience:</h1>
                    </MainInner>
                    <MainInner>
                        <h1>Hobbies:</h1>
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};