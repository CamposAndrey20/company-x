import React, { forwardRef, useId } from 'react'
import * as styles from './input.module.scss'

const Input = forwardRef((props, inputRef) => {
    const { value, label, onChange, placeholder, ...otherProps } = props
    const id = useId()

    return (
        <div className={styles.input__container}>
            <label className={`${styles.input__label} ${value !== '' ? styles.input__label__floating : ''}`} htmlFor={id}>{label}</label>
            <input
                className={styles.input__element}
                id={id}
                ref={inputRef}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    )
});

export default Input