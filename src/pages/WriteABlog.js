import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddBlogPost from '../components/AddBlogPost'


export default class WriteABlog extends Component {
  render() {
    return (
      <div>
            <Header/>
            <AddBlogPost/>
            <Footer/>
      </div>
    )
  }
}
