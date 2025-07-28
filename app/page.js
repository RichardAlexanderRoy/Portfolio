import Image from "next/image";
import styles from "./page.module.css";
import MainOuter from "./components/main/MainOuter.js";
import MainInner from "./components/main/MainInner.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainOuter title="Hi! I'm Richard Roy, Welcome To My Portfolio!">
          <MainInner>
            <h2>Computer Science Senior/Aspiring Software Engineer</h2>
            <p>I'm currently a senior studying Computer Science with a strong passion for full-stack development, AI, and the intersection of neuroscience and computing. I'm actively looking for internship opportunities for Fall, Winter, or Spring/Summer semesters.</p>
            <p>This portfolio is a collection of what I’ve built, what I’m learning, and where I’m heading.</p>
            <p>- On the About page, you'll find my degree information, work experience, and my freelance gigs.</p>
            <p>- On the Projects page, you'll find a collection of projects and code examples — from university coursework to personal projects</p>
            <p>- On the Skills page, you can explore technologies and languages I’ve worked with, some link to a project that shows that skill in action.</p>
            <p>Whether you're a recruiter, fellow developer, or just curious — I'm glad you're here.</p>
            <p>Feel free to reach out if you have any questions, or just want to connect!</p>
          </MainInner>
        </MainOuter>
        <MainOuter title="Positions I'm Interested In">
          <MainInner>
            <h2>Software Engineer/Developer:</h2>
            <p>- Fullstack Developer Intern</p>
            <p>- Frontend Developer Intern</p>
            <p>- Backend Developer Intern</p>
            <p>- Web Developer Intern</p>
            <h2>Information Technology(IT):</h2>
            <p>- IT Support Intern</p>
            <p>- IT Technician Intern</p>
          </MainInner>
        </MainOuter>
        <MainOuter title="Career Goals">
          <MainInner>
            <h2>Short Term Goals:</h2>
            <p>- Obtain Computer Science Related Internship for University credit</p>
            <p>- Graduate with a Bachelor of Science in Computer Science</p>
            <h2>Long Term Goals:</h2>
            <p>- Obtain a PhD in Computer Science</p>
            <p>- Work in a research and development position</p>
            <p>- Teach in a university setting</p>
          </MainInner>
        </MainOuter>
        <MainOuter title="Interests and Fields of Personal Study">
          <MainInner>
            <h2>Computer Science</h2>
            <p>- Software Development</p>
            <p>- Software Engineering</p>
            <p>- Web Development</p>
            <p>- Data Science</p>
            <p>- Operating Systems</p>
            <p>- Computer Architecture</p>
            <p>- Robotics</p>
            <p>- Quantum Computing</p>
            <p>- Artificial Intelligence</p>
            <p>- Machine Learning</p>
            <p>- Game Development</p>
            <p>- Augmented Reality (AR) and Virtual Reality (VR)</p>
            <p>- Human-Computer Interaction</p>
            <p>- Computational Neuroscience</p>
            <p>- Biotechnology</p>
            <p>- Bioinformatics</p>
          </MainInner>
          <MainInner>
            <h2>Mathematics</h2>
            <p>- Graph Theory</p>
            <p>- Number Theory</p>
            <p>- Logic and Set Theory</p>
            <p>- Theoretical Mathematics</p>
            <p>- Applied Mathematics</p>
            <p>- Mathematical Modeling</p>
            <p>- Mathematical Optimization</p>
            <p>- Numerical Analysis</p>
            <p>- Cryptography</p>
          </MainInner>
          <MainInner>
            <h2>Physics</h2>
            <p>- Physics</p>
            <p>- Astrophysics</p>
            <p>- Particle Physics</p>
            <p>- Quantum Mechanics</p>
            <p>- Relativity</p>
          </MainInner>
          <MainInner>
            <h2>Neuroscience</h2>
            <p>- Computational Neuroscience</p>
            <p>- Neuroinformatics</p>
            <p>- Neuroengineering</p>
            <p>- Cognitive Neuroscience</p>
          </MainInner>
          <MainInner>
            <h2>Psychology</h2>
            <p>- Behavioral Psychology</p>
            <p>- Developmental Psychology</p>
            <p>- Environmental Psychology</p>
            <p>- Evolutionary Psychology</p>
            <p>- Social Psychology</p>
            <p>- Cognitive Psychology</p>
            <p>- Cross-Cultural Psychology</p>
          </MainInner>
          <MainInner>
            <h2>Philosophy</h2>
            <p>- Philosophy of Mind</p>
            <p>- Philosophy of Science</p>
            <p>- Absurdism</p>
            <p>- Existentialism</p>
            <p>- Epistemology</p>
            <p>- Metaphysics</p>
            <p>- Ethics</p>
            <p>- Logic</p>
          </MainInner>
        </MainOuter>
      </main>
    </div>
  );
  /*return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="./next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="./vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="./file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="./window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="./globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );*/
}
