import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby"

export default class HeroSlider extends Component {
    render() {
        const settings = {
          dots: true, 
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true, 
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        };
        return (
          <div>
          
            <Slider {...settings}>

              <div  className="slide1">
                <Link to="/singleArticlePage">
                <div className="sliderstyle">
                    <a> #MojoMasti </a>
                    <p>ফান হবে সুপার ডুপার, মোজো মাস্তির নতুন অফার। মোজো ২৫০ মি.লি. এখন মাত্র ১৬ টাকা।</p>
                    <h4> 26 / 10 / 19 </h4>
                </div>
                </Link>
              </div>

              <div  className="slide2">
               <Link to="/singleArticlePage">
                <div className="sliderstyle">
                    <a> #MojoMasti </a>
                    <p>ফান হবে সুপার ডুপার, মোজো মাস্তির নতুন অফার। মোজো ২৫০ মি.লি. এখন মাত্র ১৬ টাকা।</p>
                    <h4> 26 / 10 / 19 </h4>
                </div>
                </Link>
              </div>

              <div  className="slide3">
               <Link to="/singleArticlePage">
                <div className="sliderstyle">
                    <a> #MojoMasti </a>
                    <p>ফান হবে সুপার ডুপার, মোজো মাস্তির নতুন অফার। মোজো ২৫০ মি.লি. এখন মাত্র ১৬ টাকা।</p>
                    <h4> 26 / 10 / 19 </h4>
                </div>
                </Link>
              </div>

              <div  className="slide1">
               <Link to="/singleArticlePage">
                <div className="sliderstyle">
                    <a> #MojoMasti </a>
                    <p>ফান হবে সুপার ডুপার, মোজো মাস্তির নতুন অফার। মোজো ২৫০ মি.লি. এখন মাত্র ১৬ টাকা।</p>
                    <h4> 26 / 10 / 19 </h4>
                </div>
                </Link>
              </div>

              <div  className="slide2">
               <Link to="/singleArticlePage">
                <div className="sliderstyle">
                    <a> #MojoMasti </a>
                    <p>ফান হবে সুপার ডুপার, মোজো মাস্তির নতুন অফার। মোজো ২৫০ মি.লি. এখন মাত্র ১৬ টাকা।</p>
                    <h4> 26 / 10 / 19 </h4>
                </div>
                </Link>
              </div>

             
              
            </Slider>
          </div>
        );
      }
}
