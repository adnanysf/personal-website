'use client'
import styles from './page.module.css'
import { IoMdClose } from "react-icons/io";
import { useLayoutEffect,useRef,useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MovieData {
    year: string;
    movies: string[];
}

export default function MoviePopUp({setShowMovie, data}: any) {
    const [year, setYear] = useState<string>('')
    const [showMovies, setShowMovies] = useState<boolean>(false)
    const [movies, setMovies] = useState<string[]>([])
    const [showList, setShowList] = useState<boolean>(false)
    const appRef = useRef<HTMLDivElement | null>(null);
    const [appHeight, setAppHeight] = useState(0);

    function clickMovie(year: string) {
        setYear(year)
        setMovies(data.filter((item: MovieData) => item.year === year)[0].movies[0].split(',').map((movie: string) => movie.trim()));
        setShowMovies(false)
        setShowList(true)
    }

    function closeDisplayMovies(){
        setShowList(false)
        setShowMovies(true)
    }
    function displayMovies(){
        const variants = {
            hidden: { scaleY: "0%", originY: 1 },
            visible: { scaleY: "100%", originY: 1, transition: { duration: 0.35, when: "beforeChildren" } },
            exit: { scaleY: "0%", originY: 1, transition: { duration: 0.35 } }
        };

        const childVariants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: { opacity: 0 }
        };

        return (
            <motion.div 
                className={styles.movieShow}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.h1 className={styles.movieTitle} variants={childVariants}>My Top Movies in {year}</motion.h1>
                <motion.ol className={styles.movies} variants={childVariants}>
                    {movies.map((movie: string, index: number) => (
                        <motion.div key={index} className={styles.movie}>
                            {(index+1)+ `. ` + movie}
                        </motion.div>
                    ))}
                </motion.ol>
                <motion.div className={styles.backButt} variants={childVariants} onClick={closeDisplayMovies}>Back</motion.div>
            </motion.div>
        )
    }
    return (
        <>
            <div className={styles.rP} onClick={() => setShowMovie(false)}></div>
            <motion.div 
            initial={{ opacity: 1 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.app}>
                <AnimatePresence>
                {showList && displayMovies()}
                </AnimatePresence>
                <div className={styles.closeButton} onClick={() => setShowMovie(false)}> <IoMdClose color='#F8F9FA'/></div>
                <div className={styles.content}>
                    <h1 className={styles.title}>My Top Movies :)</h1>
                    <div className={styles.list}>
                        {data.map((item: MovieData, index: number) => (
                            <div onClick={() => clickMovie(item.year)} className={styles.years} key={index}>
                                {item.year}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    )
}