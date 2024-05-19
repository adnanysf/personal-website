'use client'
import styles from './page.module.css'
import { IoMdClose } from "react-icons/io";

export default function MoviePopUp({setShowMovie}: any) {
    return (
        <>
            <div className={styles.rP} onClick={() => setShowMovie(false)}></div>
            <div className={styles.app}>
                    <div className={styles.closeButton} onClick={() => setShowMovie(false)}> <IoMdClose color='#F8F9FA'/></div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>My Top Movies :)</h1>

                    </div>
            </div>
        </>

    )
}