import React from 'react'
import styles from './Card.module.css'
import Atropos from 'atropos/react'
import {HiOutlineWifi} from 'react-icons/hi'

export default function Card({ ...props }) {
  const colors = () => {
    if (props.color) return props.color
    return
  }

  return (
    <>
      <div className={styles.container}>
        <Atropos className='my-atropos'>
          <div className={styles.card} style={{ background: `${colors()}` }}>
            <span></span>
            <div className={styles.info}>
              <label>
                <p>CVV</p>
                <input type="text" placeholder='xxx' defaultValue={props.cvv} />
              </label>
              <label>
                <p>Agência</p>
                <input type="text" placeholder='xxxx' defaultValue={props.agencia} />
              </label>
              <label>
                <p>N° Conta</p>
                <input type="text" placeholder='xxxxxxx-x' defaultValue={props.numConta} />
              </label>
            </div>
            <label className={styles.val}>
              <p>Validade</p>
              <input type="text" placeholder='01/20' defaultValue={props.dataVal}/>
            </label>
          </div>
        </Atropos>

        <Atropos className='my-atropos'>
          <div className={`${styles.card} ${styles.card_front}`} style={{ background: `${colors()}`, backgroundImage: `url(${props.file})`}}>
            <div className={styles.container_chip}>
              <div className={styles.chip} />
              <div>
                <HiOutlineWifi size={40} />
              </div>
            </div>     
            <input type="text" placeholder='xxxx xxxx xxxx xxxx' className={styles.numCartao} defaultValue={props.numCartao}/>
            <h5 className={styles.name}>{props.name? props.name : 'Lorem Ipsum'}</h5>
          </div>
        </Atropos>
      </div>
    </>
  )
}
