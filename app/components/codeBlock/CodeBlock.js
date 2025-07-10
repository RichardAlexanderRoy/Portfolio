'use client'
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./codeBlock.module.css";
const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


export default function CodeBlock({ filePath, language }) {
    const [code, setCode] = useState('');
    //extract just the filename from the path
    const fileName = filePath.split('/').pop();
    //load code from file
    useEffect(() => {
        fetch(filePath)
        .then(res => res.text())
        .then(setCode)
    }, [filePath])

    return (
        <>
            <h3>{fileName}</h3>
            <SyntaxHighlighter className={styles.codeBlock} language={language} style={oneDark}>
                {code}
            </SyntaxHighlighter>
        </>
    );
}