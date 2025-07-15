import React from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/main/MainOuter.js";
import MainInner from "../components/main/MainInner.js";


export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MainOuter title="About Me:">
                    <MainInner>
                        <h1>Education:</h1>
                        <h2>Grand Valley State University - Expected December 2025, GPA - 3.706</h2>
                        <h2>Bachelor of Science - Major in Computer Science, Minor in Mathematics</h2>
                    </MainInner>
                    <MainInner>
                        <h1>Work Experience:</h1>
                        <h2>Freelance Web Developer</h2>
                    </MainInner>
                    <MainInner>
                        <h1>Hobbies:</h1>
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};