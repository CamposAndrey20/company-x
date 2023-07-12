import React, { useRef } from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'
import HeadingText from '../components/heading-text'
import * as styles from '../styles/contact.module.scss'

const content = {
    contactTile: 'Contact Us',
    contactDesc: 'Please provide some information to get started'
}

const Contact = () => {
    const emailRef = useRef(null)

    const goTopCallBack = () => {
        emailRef.current.focus()
    }

    return (
        <Layout goTopCallBack={goTopCallBack}>
            <div className={styles.contact__container}>
                <HeadingText
                    title={content.contactTile}
                    description={content.contactDesc}
                />
                <div className={styles.contact__columns}>
                    <div className={styles.contact__columns__left}>
                        <ContactForm emailRef={emailRef}></ContactForm>
                    </div>
                    <div className={`${styles.contact__columns__right}`}>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                        <h5>Phone:</h5>
                        <a href="tel:+18777777777">+1 (877) 777-7777</a>
                        <h5>Hours:</h5>
                        <p>Monday - Sunday: <span>7am - 11pm EST</span></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact

export const Head = () => <title>Contact Us Page</title>
