'use client'
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./codeBlock.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function CodeBlock({ filePath, visible}) {
    const [code, setCode] = useState('');
    const [isVisible, setIsVisible] = useState(visible);
    
    //extract just the filename from the path
    const fileName = filePath.split('/').pop();
    //check file type
    const suffix = fileName.split('.').pop();
    let language = '';
    switch (suffix) {
        case 'js':
            language = 'javascript';
            break;
        case 'py':
            language = 'python';
            break;
        case 'c++':
            language = 'cpp';
            break;
        case 'hpp':
            language = 'cpp';
            break;
        case 'ts':
            language = 'typescript';
            break;
        default:
            language = suffix;
    }

    //load code from file
    useEffect(() => {
        fetch(filePath)
        .then(res => res.text())
        .then(setCode)
    }, [filePath])

    return (
        <>
            <h3>{fileName}</h3>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? ('Hide Code') : 'Show Code'}
            </button>
            {isVisible && (
                <SyntaxHighlighter className={styles.codeBlock} language={language} style={oneDark}>
                    {code}
                </SyntaxHighlighter>
            )}
        </>
    );
}