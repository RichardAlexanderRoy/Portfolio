import React from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/MainOuter.js";
import MainInner from "../components/MainInner.js";


export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MainOuter title="Chess:">
                    <MainInner>
                        <h2>Skills:</h2>
                    </MainInner>
                </MainOuter>
                <MainOuter title="2D-DnD-RPG">
                    <MainInner>
                        <h2>Skills:</h2>
                    </MainInner>
                </MainOuter>
                <MainOuter title="Rat Game">
                    <MainInner>
                        <h2>Skills:</h2>
                    </MainInner>
                </MainOuter>
                <MainOuter title="Simple Shell">
                    <MainInner>
                        <h2>Skills:</h2>
                    </MainInner>
                </MainOuter>
                <MainOuter title="Warcraft 1 remake">
                    <MainInner>
                        <h2>Skills:</h2>
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};