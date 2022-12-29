import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <p>Gabriel V. Pagnan</p>
                <span>
                    <Link href='https://github.com/Gabriel-pagnan/DevCard' target='_blank'>
                        <BsGithub size={24} />
                    </Link>
                </span>
            </div>
        </>
    )
}

