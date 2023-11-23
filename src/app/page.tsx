"use client"
import styles from './page.module.css'
import Image from 'next/image'
import waves from '../../public/layered-waves.svg'

export default function Page() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
    return (
      <div className={styles.appcon}>
        <div className={styles.app}>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.textContainer}>
                <span className={styles.intro}><div>Howdy! My name is</div></span>
                <span className={styles.name}><div>Adnan Yusuf</div></span>
                <span className={styles.introtwo}><div> and I'm a </div></span>
                <span className={styles.pos}><div>Software Engineer</div></span>
              </div>
            </div>
            <div className={styles.links}>
            <a href='/Yusuf_Resume2324.pdf' target='_' className={styles.link}>Resume</a>
              <a href='https://www.linkedin.com/in/adnyusuf/' target='_' className={styles.link}>LinkedIn</a>
              <a href='https://github.com/adnanysf' target='_' className={styles.link}>Github</a>
              <div className={styles.link} onClick={scrollToBottom}>About Me</div>

            </div>
          </div>
            <div className={styles.foot}>
             <Image src={waves} alt="waves" className={styles.waves} layout="fill" objectFit="cover"/> 


          </div>
        </div>
        <div className={styles.sec}>

          <div className={styles.left}>
            <img src="/profpic.jpg" className={styles.me}/>
          </div>
          <div className={styles.right}>
            <div className={styles.aboutme}>
              <div className={styles.aboutmetitle}>Howdy!</div>
              <div className={styles.aboutmetext}>My name is Adnan Yusuf and I'm currently 
              studying Computer Science at Texas A&M University (May 2025). I have passion for building software, working with people 
              and participating in hackathons. 
                
               Currently, I am a Director at TAMUhack, an organization that manages two hackathons at Texas A&M. 
               Next Summer, I will be joining JP Morgan Chase & Co. as a Software Engineering Intern. </div>
               <div className={styles.aboutmecontact}>
              If you'd like to get in touch, feel free to reach out to me at <a href="mailto:asubyusuf@gmail.com">asubyusuf@gmail.com</a> or send me a message on <a href="https://www.linkedin.com/in">LinkedIn!</a>.
              </div>
              <div className={styles.arrowbox} onClick={scrollToTop}>
                <img src='/arrow-up.png' className={styles.arrow}/> Up, Up, and Away!
              </div>
            </div>
            
            
          
          </div>

        </div>

      </div>
        
    )
}