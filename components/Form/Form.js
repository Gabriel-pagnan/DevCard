import Link from 'next/link';
import React, { useState } from 'react'
import Card from '../Card/Card'
import styles from './Form.module.css'
import { isNumeric } from 'validator';

export default function Form() {
    const [name, setName] = useState('');
    const [cvv, setCvv] = useState('');
    const [numConta, setNumConta] = useState('');
    const [agencia, setAgencia] = useState('');
    const [dataVal, setDataVal] = useState('');
    const [numCartao, setNumCatao] = useState('');

    class ValidForm {
        validNumCatao() {
            if (!isNumeric(numCartao)) {
                return (
                    <p className={styles.error}>Formato inválido</p>
                )
            }
        }
        validNumConta() {
            if (!isNumeric(numConta)) {
                return (
                    <p className={styles.error}>Formato inválido</p>
                )
            }
        }
        validCvv() {
            if (!isNumeric(cvv)) {
                return (
                    <p className={styles.error}>Formato inválido</p>
                )
            }
        }
        validAgencia() {
            if (!isNumeric(agencia)) {
                return (
                    <p className={styles.error}>Formato inválido</p>
                )
            }
        }
        validData() {
            if (!isNumeric(dataVal)) {
                return (
                    <p className={styles.error}>Formato inválido</p>
                )
            }
        }
    }
    const valid = new ValidForm()

    const regexCartao = numCartao.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/g, '$1 . $2. $3 . $4');
    const regexDataVal = dataVal.replace(/^([<\d]{2})([\d]{2})([\d]{2})([\d]{2})$/g, '$2/$4')
    const regexNumConta = numConta.replace(/^([\d]{7})([\d])$/g, '$1-$2')


    const handleSubmit = (e) => {
        e.persist();
        e.preventDefault();
    }

    return (
        <>
            <div className={styles.container_form}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" className='peer' placeholder=" " onChange={e => setNumCatao(e.target.value)} maxLength={16} />
                        <label className="peer-focus:font-medium peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">N° Cartão</label>
                        {numCartao ? valid.validNumCatao() : ''}
                    </div>
                    <div>
                        <input type="text" className='peer' placeholder=" " onChange={e => setName(e.target.value)} />
                        <label className="peer-focus:font-medium peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    </div>
                    <div>
                        <input type="text" className='peer' placeholder=" " onChange={e => setDataVal(e.target.value)} maxLength={8} />
                        <label className="peer-focus:font-medium peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Data vencimento</label>
                        {dataVal ? valid.validData() : ''}
                    </div>
                    <div>
                        <input type="text" className='peer' placeholder=" " onChange={e => setCvv(e.target.value)} maxLength={3} />
                        <label className="peer-focus:font-medium peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CVV</label>
                        {cvv ? valid.validCvv() : ''}
                    </div>
                    <div>
                        <input type="text" className='peer' placeholder=" " onChange={e => setAgencia(e.target.value)} maxLength={4} />
                        <label className="peer-focus:font-medium peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Agência</label>
                        {agencia ? valid.validAgencia() : ''}
                    </div>

                    <div>
                        <input type="text" className='peer' placeholder=" " onChange={e => setNumConta(e.target.value)} maxLength={8} />
                        <label className="peer-focus:font-medium peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">N° Conta</label>
                        {numConta ? valid.validNumConta() : ''}
                    </div>
                    <div className={styles.container_btn}>
                        <button type="submit">Enviar</button>
                        <span>
                            <Link href='/custom'>
                                Next
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
            <Card name={name} cvv={cvv} numConta={regexNumConta} agencia={agencia} numCartao={regexCartao} dataVal={regexDataVal} />
        </>

    )
}