import { useState, useEffect } from "react";
import "./App.css";

const TEXT = "Hey, I'm Patrick";
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
    <main className="scanlines grid grid-cols-[auto_1fr_1fr_1fr] grid-rows-[auto_1fr] gap-4 min-h-screen p-2 bg-[#244855]">
      <div className="col-start-1 row-span-full flex flex-col justify-start items-center bg-[#FBE9D0] p-4 shadow-sm border-solid">
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

      <div className="text-2xl md:text-8xl pl-2 my-2 border-l-4 font-bold border-teal-400 text-[#E64833] col-start-2 col-span-3 font-mono-jb">
        <h1 id="typing" aria-label={TEXT}>
          {typed}
          <span class="blinking-dot">.</span>
        </h1>
      </div>

      <section class="place-items-center">
        <label>
          <input class="peer/showLabel absolute scale-0" type="checkbox" />
          <span class="block max-h-14 max-w-xs overflow-hidden bg-[#90AEAD] px-4 py-0 text-[#E64833] shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
            <h3 class="flex h-14 cursor-pointer items-center font-bold">
              Experience
            </h3>
            <p class="mb-2">

            </p>
          </span>
        </label>
      </section>

      <section class="place-items-center">
        <label>
          <input class="peer/showLabel absolute scale-0" type="checkbox" />
          <span class="block max-h-14 max-w-xs overflow-hidden bg-[#90AEAD] px-4 py-0 text-[#E64833] shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
            <h3 class="flex h-14 cursor-pointer items-center font-bold">
              Projects
            </h3>
            <p class="mb-2">

            </p>
          </span>
        </label>
      </section>
    </main>

    
  );
}

export default App;
