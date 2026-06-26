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
import oguzkervan from "./assets/oguz-kervan.png";
import chainybaryga from "./assets/chai.JPG";

import { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { translations } from './translations'
import type { Language } from './translations'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language | null
    return saved || 'en'
  })

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ru' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

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
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <h2 onClick={scrollToContacts} style={{ cursor: 'pointer', margin: 0 }}>{t('contactMe')}</h2>
              <button
                onClick={toggleLanguage}
                style={{
                  padding: '8px 14px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid white',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '12px',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >
                {language === 'en' ? 'РУ' : 'EN'}
              </button>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="welcome">
          <div className="welcomeText">
            <h1>{t('buildWebsites')} <span className="websites">{t('websites')}</span> <span className="design">{t('design')}</span> {t('futures')}</h1>
            <h3>{t('subtitle')}</h3>
          </div>    
          <div className="welcomePhoto">
            <img src={me} alt="my photo" />
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="tech">
          <div className="techTable">
            <div className="sphere">
              <h1>{t('webDevelopment')}</h1>
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
              <h1>{t('uxuiDesign')}</h1>
              <div className="techTools">
                <div className="figma techtool">Figma</div>
                <div className="sketch techtool">Responsive design</div>
                <div className="adobeXD techtool">Adobe XD</div>
              </div>
            </div>
            <div className="sphere">
              <h1>{t('artificialIntelligence')}</h1>
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

            <div className="work chainybaryga">
               <a href="https://chainybaryga.com" target="_blank" rel="noopener noreferrer">
                <div className="image">
                  <img src={chainybaryga} alt="" />
                </div>
                <h1>{t('webDevelopment')}</h1>
                <h2>{t('chainybarygaTitle')}</h2>
                <h3>
                  {t('chainybarygaDesc')}
                </h3>
              </a>
            </div>

            <div className="work oguzkervan">
               <a href="https://oguzkervan.com" target="_blank" rel="noopener noreferrer">
                <div className="image">
                  <img src={oguzkervan} alt="" />
                </div>
                <h1>{t('webDevelopment')}</h1>
                <h2>{t('oguzkervanTitle')}</h2>
                <h3>
                  {t('oguzkervanDesc')}
                </h3>
              </a>
            </div>
         
            <div className="work pasabahce">
               <a href="https://pasabahce.vercel.app" target="_blank" rel="noopener noreferrer">
                <div className="image">
                  <img src={pasabahce} alt="" />
                </div>
                <h1>{t('webDevelopment')}</h1>
                <h2>{t('pasabahceTitle')}</h2>
                <h3>
                  {t('pasabahceDesc')}
                </h3>
              </a>
            </div>
          
          <div className="work plantmama">
            <a href="https://www.figma.com/design/Kutmuk4aDrFlfc34Fg2ZMb/Untitled?node-id=0-1&t=iyFigHvX4iCYWmS9-1" target="_blank" rel="noopener noreferrer">         
              <div className="image">
                <img src={plantmama} alt="" />
              </div>
              <h1>{t('uxuiDesign')}</h1>
              <h2>{t('plantmamaTitle')}</h2>
              <h3>
                {t('plantmamaDesc')}
              </h3>
            </a>
          </div>

          <div className="work bork">
            <a href="https://drive.google.com/drive/folders/12PGUgqR5amVecKkp2bi6OVUIVMi77kmq?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <div className="image">
                <img src={bork} alt="" />
              </div>
              <h1>{t('artificialIntelligence')}</h1>
              <h2>{t('borkTitle')}</h2>
              <h3>
                {t('borkDesc')}
              </h3>
            </a>
          </div>
        </div>
      </div>

        <Banner
        items={[t('bannerItem1'), t('bannerItem2'), t('bannerItem3')]}/>

        <div className="container">
          <div className="footer" id="contacts">
            <h1>{t('projectInMind')} <span className="websites">{t('project')}</span> {t('inMind')} <span className="design">{t('letsBuild')}</span> {t('buildIt')}</h1>
            <div className="contacts">
              <a href="mailto:owezresul0@gmail.com" target="_blank" rel="noopener noreferrer">
              <div className="email contact">
                <img src={mail} alt="" />
                <h3>{t('email')}</h3>
              </div>
              </a>
              <a href="https://t.me/owezresul" target="_blank" rel="noopener noreferrer">
                <div className="telegram contact">
                <img src={tg} alt="" />
                <h3>{t('telegram')}</h3>
              </div>
              </a>
              <a href="https://github.com/nurtulbek" target="_blank" rel="noopener noreferrer">
                <div className="github contact">
                  <img src={git} alt="" />
                  <h3>{t('github')}</h3>
                </div>
              </a>
              <a href="https://owezresul.web.app" target="_blank" rel="noopener noreferrer">
                <div className="website contact">
                  <img src={web} alt="" />
                  <h3>{t('website')}</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
