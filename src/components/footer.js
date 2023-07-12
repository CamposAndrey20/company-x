import React from 'react'
import * as styles from './footer.module.scss'

const Footer = ({goTopCallBack}) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={`${styles.footer__top__left}`}>
                    <div className={styles.footer__top__container}>
                        <ul>
                            <li><a href="tef:+18777777777">✆ +1 (877) 777-7777</a></li>
                            <li>123 Main st, San Francisco, CA, 94107</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.footer__top__right}`}>
                    <div className={styles.footer__top__container}>
                        <h4 className={styles.footer__top__title}>Free Trial</h4>
                        <ul>
                            <li>Azure</li>
                            <li>AWS</li>
                            <li>Google</li>
                        </ul>
                    </div>
                    <div className={styles.footer__top__container}>
                        <h4 className={styles.footer__top__title}>Resouces</h4>
                        <ul>
                            <li>Terms Of Service</li>
                            <li>Privacy Policy</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
                <button onClick={goTopCallBack} className={styles.footer__jumpto}>
                    <img alt="jump to" src="/jump-to.png"></img>
                </button>
            </div>
            <div className={styles.footer__bottom}>
                <p>© 2022 Example </p>
            </div>
        </footer>
    )
}

export default Footer