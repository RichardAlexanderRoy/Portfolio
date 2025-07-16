'use client'
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./codeBlock.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function CodeBlock({ filePath, visible, onLoad}) {
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

    useLayoutEffect(() => {
        if(code && onLoad) {
            onLoad();
        }
    }, [code])

    return (
        <div className={styles.codeBlock}>
            <h3>{fileName}</h3>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? ('Hide Code') : 'Show Code'}
            </button>
            {isVisible && (
                <SyntaxHighlighter style={oneDark} customStyle={{margin: '5px auto', overflow: 'scroll', maxHeight: '500px', width: 'fit-content', maxWidth: '100%', padding: '5px 5px', border: '1px solid green'}} language={language}>
                    {code}
                </SyntaxHighlighter>
            )}
        </div>
    );
}