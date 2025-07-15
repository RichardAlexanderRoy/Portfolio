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
    //const chessCode = ["ChessModel.java", "ChessPanel.java", "ChessPiece.java", "ChessGUI.java", "Player.java", "Move.java", "ChessTest.java","ChessTestHelper.java", "King.java", "Knight.java", "Pawn.java", "Queen.java", "Rook.java"];
    const chessCode = ["ChessModel.java", "ChessPanel.java", "ChessPiece.java", "ChessGUI.java", "Player.java", "Move.java", "Queen.java"];
    const craftWarCode = ["main.py", "entity.py", "spritesheet.py", "projectile.py", "melee.py", "ranged.py"];
    //const textBasedRPGCode = ["Game.cpp", "Game.hpp", "main.cpp", "Location.cpp", "Location.hpp", "Item.cpp", "Item.hpp", "NPC.cpp", "NPC.hpp"];
    const textBasedRPGCode = ["Game.cpp", "main.cpp", "Location.cpp", "Item.cpp", "NPC.cpp"];
    //const thisSiteCode = [base+"components/"+"ProjectCodeWrapper.js", base+"components/"+"CodeBlock.js", base+"layout.js",base+"page.js", base+"about/"+"page.js", base+"projects/"+"page.js", base+"skills/"+"page.js", base+"contact/"+"page.js"];
    const thisSiteCode = ["ProjectCodeWrapper.js", "CodeBlock.js", "Header.js", "MainOuter.js", "MainInner.js", "pageProjects.js",];

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MainOuter title="Projects">
                    <p>Here you will find a few of the projects I have done during my degree, if you would like to see a project that demonstrates proficiency in a specific language, please refer to the skills page where you can find links to projects based on the programming language or tool.</p>
                </MainOuter>
                <MainOuter title="Chess:">
                    <MainInner>
                        <h2>Skills:</h2>
                        <h3>- Java</h3>
                        <ProjectCodeWrapper fileArr={completePaths("Chess", chessCode)} />
                    </MainInner>
                </MainOuter>
                <MainOuter title="This Site!">
                    <MainInner>
                        <h2>Skills:</h2>
                        <h3>- JavaScript</h3>
                        <h3>- React</h3>
                        <h3>- Next.js</h3>
                        <h3>- CSS</h3>
                        <ProjectCodeWrapper fileArr={completePaths("ThisSite", thisSiteCode)} />
                    </MainInner>
                </MainOuter>
                <MainOuter title="Simple Shell">
                    <MainInner>
                        <h2>Skills:</h2>
                        <h3>- C</h3>
                        <ProjectCodeWrapper fileArr={completePaths("SimpleShell", Array("shell.c"))} />
                    </MainInner>
                </MainOuter>
                <MainOuter title="Text Based RPG">
                    <MainInner>
                        <h2>Skills:</h2>
                        <h3>- C++</h3>
                        <ProjectCodeWrapper fileArr={completePaths("TextBasedRPG", textBasedRPGCode)} />
                    </MainInner>
                </MainOuter>
                <MainOuter title="Warcraft 1 remake">
                    <MainInner>
                        <h2>Skills:</h2>
                        <h3>- Python</h3>
                        <ProjectCodeWrapper fileArr={completePaths("CraftWar", craftWarCode)} />
                    </MainInner>
                </MainOuter>
                <MainOuter title="GuessNum">
                    <MainInner>
                        <h2>Skills: </h2>
                        <h3>- Swift</h3>
                        <ProjectCodeWrapper fileArr={completePaths("GuessNum", Array("main.swift"))} />
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};