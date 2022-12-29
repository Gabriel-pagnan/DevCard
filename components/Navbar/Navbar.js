import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div>
        <nav className={styles.nav}>
            <h3>Dev<span>Card</span></h3>
            <ul>
                <li>
                    <Link href='/'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link href='/custom'>
                        Customizar
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

