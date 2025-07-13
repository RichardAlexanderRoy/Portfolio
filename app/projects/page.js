import React from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/main/MainOuter.js";
import MainInner from "../components/main/MainInner.js";
import CodeBlock from "../components/codeBlock/CodeBlock.js";
import ProjectCodeWrapper from "../components/codeBlock/ProjectCodeWrapper.js";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

function completePaths(project, fileNames) {
    return (fileNames.map((fileName) => base+"/projectCode/"+project+'/'+fileName));
}

export default function About() {
    // for each project create an array that contains the links 
    // to the files in that array, pass them into the wrapper
    // function and it will spit out a block of scrollable code 
    // for each file passed in sequentially
    
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
                <MainOuter title="GuessNum">
                    <MainInner>
                        <h2>Skills: </h2>
                        <ProjectCodeWrapper fileArr={completePaths("GuessNum", Array("main.swift"))} />
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};