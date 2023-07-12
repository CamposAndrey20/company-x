import React, { useState } from 'react'
import Input from './input'
import Select from './Select'
import * as styles from './contact-form.module.scss'

const contactUsInitialState = {
    email: '',
    name: '',
    phone: '',
    help: 'sales', 
}

const ContactForm = ({ emailRef }) => {

    const [userData, setUserData] = useState(contactUsInitialState)
    const emailRegex = /^(?!$)((?!.*@gmail\.com$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    const onChangeForm = (input, e) => {
        setUserData((prevState) => ({
            ...prevState,
            [input]: e.target.value

        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formValidity = emailRegex.test(userData.email) && userData.phone.length === 10
        if(formValidity) {
            alert("The data is correct and the form has been submitted succesfully")
        }
        setUserData(contactUsInitialState)
    }


    return (
        <form className={styles.contact__form} onSubmit={onSubmit}>
            <Input
                ref={emailRef}
                label="Email"
                value={userData.email}
                onChange={(e) => onChangeForm("email", e)}
                type="email"></Input>
            <Input
                label="Name"
                value={userData.name}
                onChange={(e) => onChangeForm("name", e)}
                type="text"></Input>
            <Input
                label="Phone Number"
                value={userData.phone}
                onChange={(e) => onChangeForm("phone", e)}
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                ></Input>
            <Select
                label="How We Can Help You?"
                value={userData.help}
                onChange={(e) => onChangeForm("help", e)}
            >
                <option value={"sales"}>Sales</option>
                <option value={"press"}>Press</option>
                <option value={"support"}>Support</option>
                <option value={"demo"}>Demo</option>
            </Select>
            <button className={styles.contact__form__button}> Submit </button>
        </form>
    )
}

export default ContactForm;