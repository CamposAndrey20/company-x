import React from 'react'
import Header from "./header"
import Footer from "./footer"
import Navbar from './navbar'

const Layout = ({ children, goTopCallBack }) => {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer goTopCallBack={goTopCallBack}></Footer>
        </>

    )
}

export default Layout