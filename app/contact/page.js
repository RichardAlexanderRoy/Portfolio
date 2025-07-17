import React from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/main/MainOuter.js";
import MainInner from "../components/main/MainInner.js";

export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MainOuter title="Get in touch with me!">
                    <MainInner>
                        <p>Email: <a href="mailto:Richard.Alex.Roy@gmail.com">Richard.Alex.Roy@gmail.com</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/richardaroy" target="_blank">richardaroy</a></p>
                        <p>GitHub: <a href="https://github.com/royri5" target="_blank">royri5</a></p>
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};