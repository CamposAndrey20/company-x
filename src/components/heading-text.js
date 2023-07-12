import React from 'react'
import * as styles from './heading-text.module.scss'

const HeadingText = ({title, description}) => {

    return (
        <div className={styles.headingtext__container}>
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
    )
}

export default HeadingText