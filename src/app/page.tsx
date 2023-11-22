import styles from './page.module.css'

export default function Page() {
    return (
        <div className={styles.app}>
          <div className={styles.content}>
            <div className={styles.title}>
              <span className={styles.intro}><div>Howdy! My name is</div></span>
              <span className={styles.name}><div>Adnan Yusuf</div></span>
              <span className={styles.introtwo}><div> and I'm a </div></span>
              <span className={styles.pos}><div>Software Engineer</div></span>
            </div>
            <div className={styles.links}>
              <div>LinkedIn</div>
              <div>Github</div>
              <div>About Me</div>

            </div>
          </div>
        </div>
    )
}