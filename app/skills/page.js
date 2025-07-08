import React from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/MainOuter.js";
import MainInner from "../components/MainInner.js";


export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MainOuter title="Skills:">
                    <MainInner>
                        <h2>Programming Languages:</h2>
                        <h3>Java</h3>
                        <h3>JavaScript</h3>
                        <h3>TypeScript</h3>
                        <h3>Python</h3>
                        <h3>Swift</h3>
                        <h3>C</h3>
                        <h3>C++</h3>
                        <h3></h3>
                    </MainInner>
                    <MainInner>
                        <h2>Programming Tools:</h2>
                        <p>Node.js</p>
                        <p>Next.js</p>
                        <p>React</p>
                        <p>Vim</p>
                    </MainInner>
                    <MainInner>
                        <h2>Operating Systems:</h2>
                        <p>Windows 10</p>
                        <p>Unix</p>
                        <p>Linux</p>
                        <p>MacOS</p>
                    </MainInner>
                    <MainInner>
                        <h2>Misc.:</h2>
                        <h3>Integrated Development Envirionment: <span>Visual Studio Code</span></h3>
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};