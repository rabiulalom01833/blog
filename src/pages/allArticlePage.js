import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AllArticles from '../components/AllArticles'
 
 

export default class allArticlePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AllArticles/>
                <Footer/>
            </div>
        )
    }
}
