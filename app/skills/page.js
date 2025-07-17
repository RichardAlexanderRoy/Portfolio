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
                <MainOuter title="Programming Languages">
                    <MainInner>
                        <Link className={styles.navlink} href={'/projects#project-java'}>- Java</Link>
                        <Link className={styles.navlink} href={'/projects#project-javascript'}>- JavaScript</Link>
                        <Link className={styles.navlink} href={'/projects#project-python'}>- Python</Link>
                        <Link className={styles.navlink} href={'/projects#project-swift'}>- Swift</Link>
                        <Link className={styles.navlink} href={'/projects#project-c'}>- C</Link>
                        <Link className={styles.navlink} href={'/projects#project-cpp'}>- C++</Link>
                        <p>- TypeScript</p>
                        <p>- MIPS Assembly</p>
                    </MainInner>
                </MainOuter>
                <MainOuter title="Programming Tools">
                    <MainInner>
                        <p>- Command Line Interface</p>
                        <p>- JUnit Tests</p>
                        <p>- React</p>
                        <p>- Vim</p>
                        <p>- Git</p>
                        <p>- GitHub</p>
                        <p>- XCode</p>
                        <p>- Visual Studio</p>
                        <p>- Unity</p>
                        <p>- Blender</p>
                        <p>- Pygame</p>
                        <p>- Flask</p>
                        <p>- SQL</p>
                        <p>- Pixie.js</p>
                    </MainInner>
                </MainOuter>
                <MainOuter title="Web Development">
                    <MainInner>
                        <p>- HTML</p>
                        <p>- CSS</p>
                        <p>- JavaScript</p>
                        <p>- TypeScript</p>
                        <p>- React</p>
                        <p>- Next.js</p>
                        <p>- Node.js</p>
                    </MainInner>
                </MainOuter>
                <MainOuter title="Operating Systems">
                    <MainInner>
                        <p>- Windows 10</p>
                        <p>- Unix</p>
                        <p>- Linux</p>
                        <p>- MacOS</p>
                    </MainInner>
                </MainOuter>
                <MainOuter title="Miscellaneous">
                    <MainInner>
                        <h2>Misc.:</h2>
                        <h3>Integrated Development Envirionment: <span>Visual Studio Code</span></h3>
                    </MainInner>
                </MainOuter>
                <MainOuter title="Artificial Intelligence & Machine Learning">
                    <MainInner>
                        <p>- OpenAI API (GPT & Whisper 1)</p>
                        <p>- Prompt Engineering</p>
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};