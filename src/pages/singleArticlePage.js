import React, { Component } from 'react'
import Header from '../components/Header' 
import Footer from '../components/Footer'
import SingleArticle from '../components/SingleArticle'
import RelatedArticles from '../components/RelatedArticles'
 
 

export default class SingleArticleDetails extends Component {
  render() {
    return (
      <div>
          <Header/>
          <SingleArticle/>
          <RelatedArticles/>
          <Footer/>
      </div>
    )
  }
}
