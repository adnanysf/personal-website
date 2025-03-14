"use client"
import styles from './page.module.css'
import Image from 'next/image'
const waves = '/layered-waves.svg';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import MoviePopUp from './components/movie';
import movies from './components/movies.json';
import { motion, AnimatePresence } from 'framer-motion';


export default function Page() {
  const searchBarItems = ['Resume', 'Github', 'LinkedIn', 'Expertise', 'GPA', 'Photo'];
  return(
    <div className={styles.maincontainer}>
      <nav className={styles.header}>

        <a href='/Yusuf_Resume.pdf'>Resume</a>
        <a href='https://www.linkedin.com/in/adnyusuf/'>Github</a>
        <a href='https://github.com/adnanysf'>LinkedIn</a>
      </nav>
      
        <div className={styles.contentContainer}>

          <div className={styles.currentContainer}></div>

          <div className={styles.searchContainer}>
            <div className={styles.title}>
              <h1 style={{cursor:"default"}}>adnan-yusuf.com</h1>
            </div>
            <div className={styles.searchbar}>
              <div className={styles.bar} style={{cursor:"default", borderBottom: '1px solid black'}}>
                Adnan Yusuf's
              </div>
            </div>
          </div>


            <div className={styles.photoContainer}>
              <img src="/profpic.jpg" alt="Adnan Yusuf" style={{width: '50%'}}/>
            </div>

      </div>

      <footer style={{position: 'fixed', bottom:'0', left: '0', margin:'1vh', fontFamily:'Roboto, sans-serif', fontWeight:'100', fontSize:'1vw'}}>
        Adnan's Personal Website v2.0.0</footer>

    </div>
  )

}