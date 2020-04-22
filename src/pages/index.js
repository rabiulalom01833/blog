import React, { Component } from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
 
 

export default class index extends Component {
  render() {
    return (
      <div>
          <Header/>
          <HeroSlider/>
          <Articles/>
          <Footer/>
      </div>
    )
  }
}
