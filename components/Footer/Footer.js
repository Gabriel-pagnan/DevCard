import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

export default function Footer() {
    return (
        <>
            <div className='bg-bg flex h-16 items-center justify-center w-full text-gray-400'>
                <p>Gabriel V. Pagnan</p>
                <span className='text-white ml-5'>
                    <Link href='https://github.com/Gabriel-pagnan' target='_blank'>
                        <BsGithub size={24} />
                    </Link>
                </span>
            </div>
        </>
    )
}

