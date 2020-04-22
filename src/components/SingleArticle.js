import React, { Component } from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { Link } from "gatsby"
import SingleArticleImage from '../images/singlePostImage.png'
import authorImg from '../images/user.png'


export default class SingleArticle extends Component {
    render() {
        return (
            <div className="SingleArticle">
                
                <Container>
                    <Row>
                       <Col lg={12}>
                            <div className="backbutton">
                                <Link className="backbut">  <i class="fas fa-chevron-left"></i> Back </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className="postAuthorDetails">
                                <div className="post_user_img">
                                  <img src={authorImg} />
                                </div>
                                <div className="post_author_details">
                                    <h3>a.m. rafat Rahman</h3>
                                    <p> <span> <i class="fas fa-calendar-alt"></i> </span> 26 Oct 2019 </p>
                                </div>
                            </div>
                            <div className="postDetails">
                                <h2>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি.</h2>
                                <p>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি. এখন আরও সাশ্রয়ী মূল্যে মাত্র ১৫ টাকায়। চলুক ফ্রেশনেশের অফুরন্ত উৎসব।</p>
                                <p>কেটারদের ধর্মঘট ডাকের পর মঙ্গলবার (২২ অক্টোবর) জরুরী সভায় বসেছিলেন বিসিবির পরিচালকরা। সকাল থেকেই মিরপুর শেরেবাংলা স্টেডিয়ামে গণমাধ্যমকর্মীদের ভিড়। সকাল ১১টার পর থেকে পরিচালকরা আসতে শুরু করেন। গুমোট একটা পরিবেশ করছিল স্টেডিয়াম এলাকায়। দুপুর ১টার পর বিসিবি সভাপতি নাজমুল হাসান পাপন আসার পরই শুরু হয় জরুরী সভা। </p>
                                <p>বিসিবির ১৫ জন পরিচালকের উপস্থিতিতে মিটিংয়ের শুরুতেই ২২ অক্টোবর প্রকাশিত জাতীয় দৈনিকগুলো নেয়া হয় বোর্ড রুমে। ক্রিকেটারদের দাবি সম্পর্কে গণমাধ্যমে প্রকাশিত রিপোর্ট দেখার পরই উদ্ভূত পরিস্থিতি নিয়ে আলোচনা হয় সভায়। দুই ঘন্টা আলোচনার পর সংবাদ সম্মেলনে উপস্থিত হন পরিচালকরা। সংবাদ সম্মেলনের স্থায়িত্বকালও বেশ লম্বা ছিল। প্রায় দেড় ঘন্টাব্যাপী সংবাদ সম্মেলনে ক্রিকেটারদের দাবির বিষয়ে নিজে বক্তব্য রাখার পাশাপাশি সাংবাদিকদের বিভিন্ন প্রশ্নের জবাব দিয়েছেন বিসিবি সভাপতি। কখনো মেজাজ হারিয়ে অগ্নিশর্মা হয়েছেন, প্রশ্নের উত্তর দিতে গিয়ে আটকে গেছেন, কখনো তার গলার স্বর সপ্তমে চ</p>
                            </div>
                            <hr/>
                            <div className="postShare">
                                <ul>
                                    <li> <i class="fas fa-eye"></i> <span> 12k </span> </li>
                                    <li><i class="fab fa-facebook-f"></i></li>
                                    <li><i class="fab fa-twitter"></i></li>
                                    <li> <i class="far fa-share-square"></i> </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                           <div className="singleAriclePostImage">
                              <img src={SingleArticleImage} />
                           </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
