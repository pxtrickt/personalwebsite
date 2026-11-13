import { useState, useEffect } from "react";
import "./App.css";

const TEXT = "Hey, I'm Patrick.";
const SPEED = 200;

function App() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(TEXT.slice(0, i));
      if (i >= TEXT.length) clearInterval(timer);
    }, SPEED);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex items-start justify-center h-screen bg-blue-500">
      <div className="text-4xl font-bold text-white">
        <h1 id="typing" aria-label={TEXT}>
          {typed}
        </h1>
      </div>

      <div className="info">
        <div className="summary">
          <p>
            Penultimate year Computer Science student at the University of
            Sussex.
          </p>
          <p>
            I am currently seeking placement year opportunites focused on
            Software Engineering and Data Science, however I am open to all
            aspects of the Informatics field.
          </p>
          <p>
            I am currently employed as a Kitchen Assistant in a Care UK home.
          </p>
        </div>
      </div>

      <footer className="sidenav">
        <div className="media">
          <a
            href="https://www.linkedin.com/in/patrick-thomas-499b61364/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Patrick on LinkedIn"
          >
            <img src="public\images\linkedin.png" alt="" width="32" height="32" />
          </a>
          <a
            href="https://github.com/pxtrickt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Patrick on GitHub"
          >
            <img src="public\images\github.png" alt="" width="32" height="32" />
          </a>
          <a href="mailto:p4trickthom4as@gmail.com" aria-label="Email Patrick">
            <img src="public\images\email.png" alt="" width="32" height="32" />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
