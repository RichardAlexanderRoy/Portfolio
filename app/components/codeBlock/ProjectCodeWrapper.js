'use client'
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./codeBlock.module.css";
import CodeBlock from './CodeBlock.js';
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function ProjectCodeWrapper({ fileArr, onLoad }) {
    // TODO: extract language from suffix, generate codeblock element
    //          for each code file in folder, ignore other files
    //          - make another component for images & or videos to display
    //              just them from same path, consider doing that here
    
    // show the first file, make the rest invisible 
    // by default with a button to show/hide individual
    // files

    // this func take in an array of path to files
    // child func takes in path to one file

    //handle loading for each block
    //const totalFiles = fileArr.length;
    const totalFiles = 1; // only need the first file to load as the rest are hidden...
    const [loadedFiles, setLoadedFiles] = useState(0);
    const handleFileLoaded = () => {
        setLoadedFiles((prev) => prev + 1);
    }

    useEffect(() => {
        if(loadedFiles === totalFiles) {
            if(onLoad) {
                onLoad()
            }
        }
    }, [loadedFiles])

    return (
        <div className={styles.container}>
            <h2>Excerpt Files: </h2>
            {fileArr.map((file) => {
                if (file === fileArr[0]) {
                    return(<CodeBlock key={file} filePath={file} visible={true} onLoad={handleFileLoaded}/>)
                } else {
                    return(<CodeBlock key={file}  filePath={file} visible={false}/>)
                }
            })}
        </div>
    );
}