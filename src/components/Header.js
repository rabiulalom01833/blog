import React, { Component } from 'react'
import LogoWrapper from './LogoWrapper'
import Navigation from './Navigation'

export default class Header extends Component {
    render() {
        return (
            <div>
                <LogoWrapper/>
                <Navigation/>
            </div>
        )
    }
}
