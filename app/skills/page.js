import React from 'react';
import styles from "../page.module.css";


export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Skills:</h1>
                <h2>Programming Languages:</h2>
                <h3>Java</h3>
                <h3>JavaScript</h3>
                <h3>TypeScript</h3>
                <h3>Python</h3>
                <h3>Swift</h3>
                <h3>C</h3>
                <h3>C++</h3>
                <h3></h3>
                <h2>Programming Tools:</h2>
                <p>Node.js</p>
                <p>Next.js</p>
                <p>React</p>
                <p>Vim</p>
                <p></p>
                <h2>Operating Systems:</h2>
                <p>Windows 10</p>
                <p>Unix</p>
                <p>Linux</p>
                <p>MacOS</p>
                <h2>Misc.:</h2>
                <h3>Integrated Development Envirionment: <span>Visual Studio Code</span></h3>
            </main>
        </div>
    );
};