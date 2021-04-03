import React from 'react'
import Footer from "../../components/Footer"
import NavBar from '../../components/NavBar'
import ContextConfig from './ContextConfig';

export default function Context({children}) {
    return (
        <>
              <ContextConfig>
        <NavBar  />
            {children}
        <Footer/>
        </ContextConfig>
        </>
    )
}
