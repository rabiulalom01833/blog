import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'

export default class LoginFrom extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Login/> 
                <Footer/>
            </div>
        )
    }
}
