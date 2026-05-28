import "./App.css"

import Banner from "./banner";

import bork from "./assets/bork.jpg";
import pasabahce from "./assets/pasabahce.jpg";
import plantmama from "./assets/plantmama.jpg";
import me from "./assets/me.png";
import tg from "./assets/tg.svg";
import git from "./assets/git.svg";
import web from "./assets/web.svg";
import mail from "./assets/mail.svg";

import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function App() {

  useEffect(() => {
  let scroll: LocomotiveScroll

  window.addEventListener('load', () => {
    scroll = new LocomotiveScroll()
  })

  return () => scroll?.destroy()
}, [])

const scrollToContacts = () => {
  const el = document.getElementById('contacts')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

  return (
    <>  
      <div className="container">
        <div className="header">
            <h1>RESUL OVEZMYRADOV</h1>
            <h2 onClick={scrollToContacts}>CONTACT ME</h2>
        </div>
      </div>

      <div className="container">
        <div className="welcome">
          <div className="welcomeText">
            <h1>I BUILD <span className="websites">WEBSITES.</span> <span className="design">I DESIGN</span> FUTURES.</h1>
            <h3>Web developer|UX/UI designer|AI specialist</h3>
          </div>    
          <div className="welcomePhoto">
            <img src={me} alt="my sex photo" />
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="tech">
          <div className="techTable">
            <div className="sphere">
              <h1>WEB DEVELOPMENT</h1>
              <div className="techTools">
                <div className="html techtool">HTML</div>
                <div className="css techtool">CSS</div>
                <div className="js techtool">JavaScript</div>
                <div className="react techtool">React</div>
                <div className="nodejs techtool">Node.js</div>
                <div className="nextjs techtool">Next.js</div>
                <div className="ts techtool">TypeScript</div>
                <div className="rest techtool">REST API</div>
                <div className="firebase techtool">Firebase</div>
                <div className="git techtool">Git</div>
                <div className="vercel techtool">Vercel</div>
              </div>
            </div>
            <div className="sphere">
              <h1>UX/UI DESIGN</h1>
              <div className="techTools">
                <div className="figma techtool">Figma</div>
                <div className="sketch techtool">Responsive design</div>
                <div className="adobeXD techtool">Adobe XD</div>
              </div>
            </div>
            <div className="sphere">
              <h1>ARTIFICIAL INTELLIGENCE</h1>
              <div className="techTools">
                <div className="veo techtool">VEO 3</div>
                <div className="higgsfield techtool">Higgsfield</div>
                <div className="midjourney techtool">Midjourney</div>
                <div className="googleAI techtool">Google AI studio</div>
                <div className="nano techtool">Nano banana</div>
                <div className="elevenLabs techtool">Eleven Labs</div>
                <div className="promptEng techtool">Prompt Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="works">
         
            <div className="work pasabahce">
               <a href="https://pasabahce.vercel.app" target="_blank" rel="noopener noreferrer">
                <div className="img">
                  <img src={pasabahce} alt="" />
                </div>
                <h1>WEB DEVELOPMENT</h1>
                <h2>Paşabahçe distributor official website </h2>
                <h3>
                  Product catalog website for a Paşabahçe distributor — 
                  built for browsing, brand trust, and wholesale lead generation
                </h3>
              </a>
            </div>
          
          <div className="work plantmama">
            <a href="https://www.figma.com/design/Kutmuk4aDrFlfc34Fg2ZMb/Untitled?node-id=0-1&t=iyFigHvX4iCYWmS9-1" target="_blank" rel="noopener noreferrer">         
              <div className="img">
                <img src={plantmama} alt="" />
              </div>
              <h1>UX/UI DESIGN</h1>
              <h2>PlantMama Concept Redesign</h2>
              <h3>
                A Figma concept redesign of PlantMama's flower store website.
                Focused on refreshing the visual style while keeping the brand's original charm intact.
              </h3>
            </a>
          </div>

          <div className="work bork">
            <a href="https://drive.google.com/drive/folders/12PGUgqR5amVecKkp2bi6OVUIVMi77kmq?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <div className="img">
                <img src={bork} alt="" />
              </div>
              <h1>AI ADS & AI FEATURES</h1>
              <h2>BORK AI Video Aderisement </h2>
              <h3>
                AI-generated video ad created for BORK using Veo 3. 
                Produced for a client presentation showcasing the brand's premium tech products with high-quality AI visuals.
              </h3>
            </a>
          </div>
        </div>
      </div>

        <Banner
        items={['nasa space app local winner', 'in freelance since 2023', 'managed full project lifecycle']}/>

        <div className="container">
          <div className="footer" id="contacts">
            <h1>HAVE A <span className="websites">PROJECT</span> IN MIND? <span className="design">LET'S </span>BUILD IT.</h1>
            <div className="contacts">
              <a href="mailto:owezresul0@gmail.com" target="_blank" rel="noopener noreferrer">
              <div className="email contact">
                <img src={mail} alt="" />
                <h3>owezresul0@gmail.com</h3>
              </div>
              </a>
              <a href="https://t.me/owezresul" target="_blank" rel="noopener noreferrer">
                <div className="telegram contact">
                <img src={tg} alt="" />
                <h3>@owezresul</h3>
              </div>
              </a>
              <a href="https://github.com/nurtulbek" target="_blank" rel="noopener noreferrer">
                <div className="github contact">
                  <img src={git} alt="" />
                  <h3>@nurtulbek</h3>
                </div>
              </a>
              <a href="https://owezresul.vercel.app" target="_blank" rel="noopener noreferrer">
                <div className="website contact">
                  <img src={web} alt="" />
                  <h3>owezresul.vercel.app</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
