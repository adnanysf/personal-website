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

  return(
    <div className={styles.maincontainer}>
      <div className={styles.header}>
        <a href='/Yusuf_Resume.pdf'>Resume</a>
        <a href='https://www.linkedin.com/in/adnyusuf/'>Github</a>
        <a href='https://github.com/adnanysf'>LinkedIn</a>
      </div>
      <div className={styles.title}>
        <h1 style={{cursor:"default"}}>Adnan Yusuf</h1>
      </div>
      <div className={styles.searchbar}></div>

    </div>
  )

}