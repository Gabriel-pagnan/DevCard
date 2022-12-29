import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { HiColorSwatch } from 'react-icons/hi'
import Card from '../Card/Card';
import styles from './Colors.module.css'

export default function Custom() {
    const [color, setColor] = useState('');
    const [file, setFile] = useState('');

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <>
            <Card color={color} file={file} />
            <form className={styles.container_color}>
                <div className={styles.color}>
                    <div>
                        <span style={{ background: `${!color ? '#b3009a' : color}` }}>
                            <input type="color" value={!color ? '#b3009a' : color} onChange={e => setColor(e.target.value)} />
                        </span>
                        <HiColorSwatch size={24} color='white' />
                    </div>
                    <input type="file" name="file" id="" onChange={e => handleChange(e)} />
                </div>
                <div>
                    <button>Customizar</button>
                    <button>
                        <Link href='/'>
                            Back
                        </Link>
                    </button>
                </div>
            </form>
        </>
    )
}
