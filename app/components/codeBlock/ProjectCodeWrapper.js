'use client'
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./codeBlock.module.css";
import CodeBlock from './CodeBlock.js';
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function ProjectCodeWrapper({ fileArr }) {
    // TODO: extract language from suffix, generate codeblock element
    //          for each code file in folder, ignore other files
    //          - make another component for images & or videos to display
    //              just them from same path, consider doing that here
    
    // show the first file, make the rest invisible 
    // by default with a button to show/hide individual
    // files

    // this func take in an array of path to files
    // child func takes in path to one file

    return (
        <div className={styles.container}>
            <h2>Excerpt Files: </h2>
            {fileArr.map((file) => {
                if (file === fileArr[0]) {
                    return(<CodeBlock key={file} filePath={file} visible={true} />)
                } else {
                    return(<CodeBlock key={file}  filePath={file} visible={false} />)
                }
            })}
        </div>
    );
}