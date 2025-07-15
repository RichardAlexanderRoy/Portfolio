import React from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/main/MainOuter.js";
import MainInner from "../components/main/MainInner.js";
import Link from 'next/link';
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MainOuter title="Skills:">
                    <MainInner>
                        <h2>Programming Languages:</h2>
                        <Link className={styles.navlink} href={'/projects#project-java'}>Java</Link>
                        <Link className={styles.navlink} href={'/projects#project-javascript'}>JavaScript</Link>
                        <Link className={styles.navlink} href={'/projects#project-python'}>Python</Link>
                        <Link className={styles.navlink} href={'/projects#project-swift'}>Swift</Link>
                        <Link className={styles.navlink} href={'/projects#project-c'}>C</Link>
                        <Link className={styles.navlink} href={'/projects#project-cpp'}>C++</Link>
                        <p>TypeScript</p>
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