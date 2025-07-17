import React from 'react';
import styles from "../page.module.css";
import MainOuter from "../components/main/MainOuter.js";
import MainInner from "../components/main/MainInner.js";


export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MainOuter title="Education">
                    <MainInner>
                        <h2>Grand Valley State University <span style={{fontSize: '0.6em'}}>- Expected December 2025, GPA - 3.706</span></h2>
                        <h2 style={{fontSize: '1.5em'}}>Bachelor of Science - Major in Computer Science, Minor in Mathematics</h2>
                    </MainInner>
                </MainOuter>
                <MainOuter title="Work Experience">
                    <MainInner>
                        <h2>Local Roofing Business <span style={{fontSize: '0.6em'}}>- Grand Rapids, Michigan, Nov. 2023 - July 2024</span></h2>
                        <h2>Freelance Web Developer</h2>
                        <p>- Built a Full-Stack Web Application: Developed a dynamic website prototype using JavaScript, HTML, CSS, and Python with Flask, integrating SQL databases for real-time data management.</p>
                        <p>- Database & Back-End Development: Designed and implemented a customer review system, showcasing expertise in SQL and full-stack development.</p>
                        <p>- Client Collaboration & Project Management: Worked closely with a non-technical client, gathering requirements, translating them into a functional prototype, and ensuring a user-friendly experience.</p>
                    </MainInner>
                    <MainInner>
                        <h2>Grand Rapids Tech <span style={{fontSize: '0.6em'}}>- Comstock Park, Michigan, June 2023 - Aug. 2023</span></h2>
                        <h2>Network & Security Install Technician</h2>
                        <p>- System Installation & Maintenance: Installed, maintained, and troubleshot network and security systems for small to medium-sized businesses.</p>
                        <p>- Innovative Research: Conducted in-depth research and implemented emerging security technologies, streamlining processes and enhancing system efficiency.</p>
                        <p>- Critical Problem-Solving: Diagnosed and resolved a critical boot issue in a large-scale security operation, significantly reducing downtime and costs through rapid, effective troubleshooting.</p>
                    </MainInner>
                    <MainInner>
                        <h2>Future Buildings <span style={{fontSize: '0.6em'}}>- Grand Rapids, Michigan, June 2021 - Aug. 2021</span></h2>
                        <h2>Assistant</h2>
                        <p>- Reviewed and organized the entire branch’s sales data into monthly progress reports on excel.</p>
                        <p>- Worked remotely with the Canadian branch’s IT to manually update and maintain company software on all computers on the office’s network.</p>
                        <p>- Collaborated with a colleague on a project to improve manufacturing cost efficiency.</p>
                    </MainInner>
                </MainOuter>
            </main>
        </div>
    );
};