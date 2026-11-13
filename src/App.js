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
    <main className="grid grid-cols-[auto_1fr_1fr_1fr] grid-rows-[auto_1fr] gap-4 min-h-screen p-2">

      <div className="col-start-1 row-span-full flex flex-col justify-start items-center bg-gray-200 p-4 rounded-lg shadow-sm">
        <div className="media flex flex-col gap-10">
          <a
            href="https://www.linkedin.com/in/patrick-thomas-499b61364/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Patrick on LinkedIn"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              width="32"
              height="32"
            />
          </a>
          <a
            href="https://github.com/pxtrickt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Patrick on GitHub"
          >
            <img src="/images/github.png" alt="GitHub" width="32" height="32" />
          </a>
          <a href="mailto:p4trickthom4as@gmail.com" aria-label="Email Patrick">
            <img src="/images/email.png" alt="Email" width="32" height="32" />
          </a>
        </div>
      </div>

      <div className="p-5 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl col-start-2 col-span-3">
        <h1 id="typing" aria-label={TEXT}>
          {typed}
        </h1>
      </div>



      
    </main>
  );
}

export default App;
