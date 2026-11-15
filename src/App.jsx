import { useState, useEffect } from "react";
import "./App.css";

const TEXT = "Hey, I'm Patrick";
const TEXT2 = "This is my website!";
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
    <main className="flex flex-col md:grid md:grid-cols-[auto_1fr_1fr_1fr] md:grid-rows-[auto_1fr] gap-4 min-h-screen p-2">
      <div className="md:col-start-1 md:row-span-full flex flex-row md:flex-col justify-center md:justify-start items-center bg-[#FBE9D0] p-4 shadow-sm border-[#874F41] border-2">
        <div className="media flex flex-row md:flex-col gap-8 md:gap-20">
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

      <div className="text-4xl md:text-8xl pl-2 my-2 border-l-4 font-bold border-[#874F41] text-[#E64833] md:col-start-2 md:col-span-3 font-mono-jb break-words">
        <h1 id="typing" aria-label={TEXT}>
          {typed}
          <span className="blinking-dot">.</span>
        </h1>
      </div>

      <section>
        <div className="block w-full max-w-2xl bg-[#FBE9D0] px-4 py-2 text-[#E64833] shadow-lg">
          <h3 className="text-xl md:text-3xl flex h-14 items-center font-bold">
            Experience
            <span className="blinking-dot">.</span>
          </h3>
          <div className="mb-4 space-y-4 text-black">
            <article>
              <h4 className="font-bold">Kitchen Assistant · Care UK</h4>
              <p className="text-sm italic">July 2026 – Present</p>
              <ul className="list-disc pl-5">
                <li>
                  Support the kitchen team in preparing and providing meals for
                  care home residents while maintaining kitchen cleanliness and
                  hygiene.
                </li>
              </ul>
            </article>

            <article>
              <h4 className="font-bold">
                Software Engineer Intern · Avco Systems
              </h4>
              <p className="text-sm italic">July 2026</p>
              <ul className="list-disc pl-5">
                <li>
                  Collaborated on large Git repositories using merge requests,
                  issue tracking, and code review workflows.
                </li>
                <li>
                  Developed responsive website features using Hugo, SASS, and
                  JavaScript to improve UI and user experience.
                </li>
                <li>
                  Created and styled multiple blog pages using Markdown and CSS.
                </li>
                <li>
                  Resolved 7+ Git issue tickets through testing, debugging, and
                  troubleshooting.
                </li>
                <li>
                  Identified code quality improvements, including formatting
                  inconsistencies and opportunities to simplify code.
                </li>
              </ul>
            </article>

            <article>
              <h4 className="font-bold">
                Volunteer Retail Assistant · Julia’s House
              </h4>
              <p className="text-sm italic">June 2025 – July 2026</p>
            </article>

            <article>
              <h4 className="font-bold">Work Experience · Splash Damage</h4>
              <p className="text-sm italic">July 2023</p>
              <ul className="list-disc pl-5">
                <li>
                  Gained insight into professional game development workflows
                  and the day-to-day operations of a large-scale studio.
                </li>
                <li>
                  Designed user interface concepts for a generic first-person
                  shooter (FPS) game.
                </li>
              </ul>
            </article>

            <article>
              <h4 className="font-bold">Work Experience · Avco Systems</h4>
              <p className="text-sm italic">February 2023</p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="block w-full max-w-2xl bg-[#FBE9D0] px-4 py-2 text-[#E64833] shadow-lg">
          <h3 className="text-xl md:text-3xl flex h-14 items-center font-bold">
            Projects
            <span className="blinking-dot">.</span>
          </h3>
          <div className="mb-4 space-y-4 text-black">
            <article>
              <h4 className="font-bold">Flappy Bird Game · C++, SDL</h4>
              <ul className="list-disc pl-5">
                <li>
                  Set up SDL, created the game window and renderer, and loaded
                  the player, background, wall, enemy textures, font, and jump
                  sounds.
                </li>
                <li>Created all assets and music soundtrack.</li>
                <li>
                  Implemented Flappy Bird-style movement with gravity and
                  jumping, randomly generated obstacles, score tracking, enemy
                  movement, collision detection, and rendering.
                </li>
                <li>
                  Utilized object-oriented programming methods to build and run
                  the game.
                </li>
                <li>
                  <a
                    href="https://github.com/pxtrickt/Flappy-Bird-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u>Repository</u>
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <h4 className="font-bold">Coming Soon · Kotlin</h4>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="block w-full max-w-2xl bg-[#FBE9D0] px-4 py-2 text-[#E64833] shadow-lg">
          <h3 className="text-xl md:text-3xl flex h-14 items-center font-bold">
            Hobbies
            <span className="blinking-dot">.</span>
          </h3>
          <div className="mb-4 space-y-4 text-black">
            <article>
              <h4 className="font-bold">Music</h4>
              <ul className="list-disc pl-5">
                <li>
                  Play a variety of instruments including Drum Kit, Tuned
                  Percussion and Clarinet.s
                </li>
                <li>Performed in an array of bands and orchestras.</li>
                <li>ATCL Drum Kit Diploma - Mar 2024.</li>
                <li>ABRSM Percussion Diploma - Mar 2024.</li>
              </ul>
            </article>
            <article>
              <h4 className="font-bold">Football</h4>
              <ul className="list-disc pl-5">
                <li>Lifelong Arsenal fan.</li>
              </ul>
            </article>
            <article>
              <h4 className="font-bold">Cooking</h4>
              <ul className="list-disc pl-5">
                <li>Enjoy making a variety of dishes to keep me through uni.</li>
              </ul>
            </article>
            <article>
              <h4 className="font-bold">Video Games</h4>
              <ul className="list-disc pl-5">
                <li>Football Manager 26</li>
                <li>Overwatch</li>
                <li>Clair Obscure Expedition 33</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
