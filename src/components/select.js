import React, { useId } from 'react'
import * as styles from './select.module.scss'

const Select = ({ label, value, onChange, children }) => {
    const id = useId()

    return (
        <div className={styles.select__container}>
            <label className={`${styles.select__label} ${value !== '' ? styles.select__label__floating : ''}`} htmlFor={id}>{label}</label>
            <select className={styles.select__element} id={id} value={value} onChange={onChange}>
                {children}
            </select>
        </div>
    )
}

export default Select