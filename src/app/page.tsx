"use client"
import styles from './page.module.css'
import Image from 'next/image'
import waves from '../../public/layered-waves.svg'

export default function Page() {
    const scrollToBottom = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
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
              <div className={styles.link}>Resume</div>
              <div className={styles.link}>LinkedIn</div>
              <div className={styles.link}>Github</div>
              <div className={styles.link} onClick={scrollToBottom}>About Me</div>

            </div>
          </div>
            <div className={styles.foot}>
             <Image src={waves} alt="waves" className={styles.waves} layout="fill" objectFit="cover"/> 


          </div>
        </div>
        <div className={styles.sec}>

          <div className={styles.left}></div>
          <div className={styles.right}>
            
          </div>

        </div>

      </div>
        
    )
}