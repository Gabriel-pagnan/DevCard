import React from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Colors from '../components/Custom/Colors'
import Footer from '../components/Footer/Footer'

export default function Custom() {
    return (
        <>
            <Navbar />
            <div className={styles.container}>            
                <Colors />
            </div>
            <Footer />
        </>
    )
}

