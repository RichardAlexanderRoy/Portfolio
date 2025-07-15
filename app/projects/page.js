'use client'
import React, { useEffect, useState } from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/main/MainOuter.js";
import MainInner from "../components/main/MainInner.js";
import ProjectCodeWrapper from "../components/codeBlock/ProjectCodeWrapper.js";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

function completePaths(project, fileNames) {
    return (fileNames.map((fileName) => base+"/projectCode/"+project+'/'+fileName));
}

export default function About() {
    //functionality for links to specific projects
    const [loading, setLoading] = useState(false);
    const [loadedProjects, setLoadedProjects] = useState(0);
    const [scrollPending, setScrollPending] = useState(false);
    const totalProjects = 6;
    
    const handleCodeLoaded = () => {
        setLoadedProjects((prev) => prev + 1);
    }

    // useEffect(() => {
    //     if(typeof window !== "undefined" && window.location.hash) {
    //         setScrollPending(true);
    //         setLoading(true);
    //     }
    // }, []);

    // useEffect(() => {
    //     if(loading) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = '';
    //     }
    // }, [loading])

    // useEffect(() => {
    //     if(scrollPending && loadedProjects === totalProjects) {
    //         const hash = window.location.hash;
    //         if(hash) {
    //             const el = document.querySelector(hash);
    //             if(el) {
    //                 el.scrollIntoView({ behavior: "smooth" });
    //             }
    //         }
    //         setScrollPending(false);
    //         setLoading(false);
    //     }
    // }, [loadedProjects, scrollPending])

    // useLayoutEffect(() => {
    //     if(scrollPending && loadedProjects === totalProjects) {
    //         const hash = window.location.hash;
    //         if(hash) {
    //             const el = document.querySelector(hash);
    //             if(el) {
    //                 el.scrollIntoView({ behavior: "smooth" });
    //             }
    //         }
    //         setScrollPending(false);
    //         setLoading(false);
    //     }
    // }, [loadedProjects, scrollPending])

    // useEffect(() => {
    //     if(loadedProjects === totalProjects) {
    //         setLoading(false);
    //         const hash = window.location.hash;
    //         if(hash) {
    //             const el = document.querySelector(hash);
    //             if(el) {
    //                 el.scrollIntoView({ behavior: 'smooth' })
    //             }
    //         }
            
    //     }
    // }, [loadedProjects])
    

    // for each project create an array that contains the links 
    // to the files in that array, pass them into the wrapper
    // function and it will spit out a block of scrollable code 
    // for each file passed in sequentially
    //const chessCode = ["ChessModel.java", "ChessPanel.java", "ChessPiece.java", "ChessGUI.java", "Player.java", "Move.java", "ChessTest.java","ChessTestHelper.java", "King.java", "Knight.java", "Pawn.java", "Queen.java", "Rook.java"];
    const chessCode = ["ChessModel.java", "ChessPanel.java", "ChessPiece.java", "ChessGUI.java", "Player.java", "Move.java", "Queen.java"];
    const craftWarCode = ["main.py", "entity.py", "spritesheet.py", "projectile.py", "melee.py", "ranged.py"];
    //const textBasedRPGCode = ["Game.cpp", "Game.hpp", "main.cpp", "Location.cpp", "Location.hpp", "Item.cpp", "Item.hpp", "NPC.cpp", "NPC.hpp"];
    const textBasedRPGCode = ["Game.cpp", "main.cpp", "Location.cpp", "Item.cpp", "NPC.cpp"];
    //const thisSiteCode = [base+"components/"+"ProjectCodeWrapper.js", base+"components/"+"CodeBlock.js", base+"layout.js",base+"page.js", base+"about/"+"page.js", base+"projects/"+"page.js", base+"skills/"+"page.js", base+"contact/"+"page.js"];
    const thisSiteCode = ["ProjectCodeWrapper.js", "CodeBlock.js", "Header.js", "MainOuter.js", "MainInner.js", "pageProjects.js",];

    return (
        <div className={styles.page}>
            {/* {loading && (
                <div className={styles.loadingOverlay}>
                    <p>Preparing content... Please wait a moment...</p>
                    </div>
                    )} */}
            <main className={styles.main}>
                <MainOuter title="Projects">
                    <p>Here you will find a few of the projects I have done during my degree, if you would like to see a project that demonstrates proficiency in a specific language, please refer to the skills page where you can find links to projects based on the programming language or tool.</p>
                </MainOuter>
                <MainOuter id="project-python" title="Warcraft 1 remake">
                    <MainInner>
                        <h2>Skills:</h2>
                        <h3>- Python</h3>
                        <h3>- Pygame</h3>
                        <ProjectCodeWrapper fileArr={completePaths("CraftWar", craftWarCode)} onLoad={handleCodeLoaded} />
                    </MainInner>
                </MainOuter>
                    <MainOuter id="project-cpp" title="Text Based RPG">
                        <MainInner>
                            <h2>Skills:</h2>
                            <h3>- C++</h3>
                            <ProjectCodeWrapper fileArr={completePaths("TextBasedRPG", textBasedRPGCode)} onLoad={handleCodeLoaded} />
                        </MainInner>
                    </MainOuter>
                <MainOuter id="project-java" title="Chess:">
                    <MainInner>
                        <h2>Skills:</h2>
                        <h3>- Java</h3>
                        <ProjectCodeWrapper fileArr={completePaths("Chess", chessCode)} onLoad={handleCodeLoaded} />
                    </MainInner>
                </MainOuter>
                <MainOuter id="project-c" title="Simple Shell">
                    <MainInner>
                        <h2>Skills:</h2>
                        <h3>- C</h3>
                        <ProjectCodeWrapper fileArr={completePaths("SimpleShell", Array("shell.c"))} onLoad={handleCodeLoaded} />
                    </MainInner>
                </MainOuter>
                <MainOuter id="project-swift" title="GuessNum">
                    <MainInner>
                        <h2>Skills: </h2>
                        <h3>- Swift</h3>
                        <ProjectCodeWrapper fileArr={completePaths("GuessNum", Array("main.swift"))} onLoad={handleCodeLoaded} />
                    </MainInner>
                </MainOuter>
                <MainOuter id="project-javascript" title="This Site!">
                    <MainInner>
                        <h2>Skills:</h2>
                        <h3>- JavaScript</h3>
                        <h3>- React</h3>
                        <h3>- Next.js</h3>
                        <h3>- CSS</h3>
                        <ProjectCodeWrapper fileArr={completePaths("ThisSite", thisSiteCode)} onLoad={handleCodeLoaded} />
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};