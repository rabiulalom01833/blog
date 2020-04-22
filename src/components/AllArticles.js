import React, { Component } from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { Link } from "gatsby"
import SingleArticleImage from '../images/Screenshot_1.png'
import authorImg from '../images/user.png'
import a1 from '../images/b-1.png'
import a2 from '../images/b-2.png'
import a3 from '../images/b-3.png'
import a4 from '../images/b-4.png'

export default class AllArticles extends Component {
    render() {
        return (
            <div className="SingleArticle">
                
                <Container>
                    <Row>
                       <Col lg={12}>
                            <div className="postPageName">
                                <h2> সাহিত্য </h2>
                            </div>
                            <Row>
                                <Col lg={1}>
                                    <div className="totalPostArticle">
                                        <p>107 Articles</p>
                                    </div>
                                </Col>
                                <Col lg={11}>
                                    <div className="hori">
                                         <hr/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={9} md={8}>

                        
                            <div className="postBlog"> 
                                <div className="postAuthorDetails">
                                    <div className="post_user_img">
                                        <img src={authorImg} />
                                        </div>
                                        <div className="post_author_details">
                                            <h3>a.m. rafat Rahman</h3>
                                            <p> <span> <i class="fas fa-calendar-alt"></i> </span> 26 Oct 2019 </p>
                                    </div>
                                </div>
                                <Link to="/singleArticlePage">
                                    <div className="postDetails">
                                        <h2>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি.</h2>
                                        <p>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি. এখন আরও সাশ্রয়ী মূল্যে মাত্র ১৫ টাকায়। চলুক ফ্রেশনেশের অফুরন্ত উৎসব।</p>
                                    </div>
                                    <div className="singleAriclePostImage">
                                        <img src={SingleArticleImage} />
                                    </div>
                                </Link>
                                <div className="postShare">
                                    <ul>
                                        <li> <i class="fas fa-eye"></i> <span> 12k </span> </li>
                                        <li><i class="fab fa-facebook-f"></i></li>
                                        <li><i class="fab fa-twitter"></i></li>
                                        <li> <i class="far fa-share-square"></i> </li>
                                    </ul>
                                </div>
                            </div> 

                            <div className="postBlog"> 
                                <div className="postAuthorDetails">
                                    <div className="post_user_img">
                                        <img src={authorImg} />
                                        </div>
                                        <div className="post_author_details">
                                            <h3>a.m. rafat Rahman</h3>
                                            <p> <span> <i class="fas fa-calendar-alt"></i> </span> 26 Oct 2019 </p>
                                    </div>
                                </div>
                                <Link to="/singleArticlePage">
                                    <div className="postDetails">
                                        <h2>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি.</h2>
                                        <p>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি. এখন আরও সাশ্রয়ী মূল্যে মাত্র ১৫ টাকায়। চলুক ফ্রেশনেশের অফুরন্ত উৎসব।</p>
                                    </div>
                                    <div className="singleAriclePostImage">
                                        <img src={SingleArticleImage} />
                                    </div>
                                </Link>
                                <div className="postShare">
                                    <ul>
                                        <li> <i class="fas fa-eye"></i> <span> 12k </span> </li>
                                        <li><i class="fab fa-facebook-f"></i></li>
                                        <li><i class="fab fa-twitter"></i></li>
                                        <li> <i class="far fa-share-square"></i> </li>
                                    </ul>
                                </div>
                            </div> 

                            <div className="postBlog"> 
                                <div className="postAuthorDetails">
                                    <div className="post_user_img">
                                        <img src={authorImg} />
                                        </div>
                                        <div className="post_author_details">
                                            <h3>a.m. rafat Rahman</h3>
                                            <p> <span> <i class="fas fa-calendar-alt"></i> </span> 26 Oct 2019 </p>
                                    </div>
                                </div>
                                <Link to="/singleArticlePage">
                                    <div className="postDetails">
                                        <h2>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি.</h2>
                                        <p>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি. এখন আরও সাশ্রয়ী মূল্যে মাত্র ১৫ টাকায়। চলুক ফ্রেশনেশের অফুরন্ত উৎসব।</p>
                                    </div>
                                    <div className="singleAriclePostImage">
                                        <img src={SingleArticleImage} />
                                    </div>
                                </Link>
                                <div className="postShare">
                                    <ul>
                                        <li> <i class="fas fa-eye"></i> <span> 12k </span> </li>
                                        <li><i class="fab fa-facebook-f"></i></li>
                                        <li><i class="fab fa-twitter"></i></li>
                                        <li> <i class="far fa-share-square"></i> </li>
                                    </ul>
                                </div>
                            </div> 

                            <div className="postBlog"> 
                                <div className="postAuthorDetails">
                                    <div className="post_user_img">
                                        <img src={authorImg} />
                                        </div>
                                        <div className="post_author_details">
                                            <h3>a.m. rafat Rahman</h3>
                                            <p> <span> <i class="fas fa-calendar-alt"></i> </span> 26 Oct 2019 </p>
                                    </div>
                                </div>
                                <Link to="/singleArticlePage">
                                    <div className="postDetails">
                                        <h2>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি.</h2>
                                        <p>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি. এখন আরও সাশ্রয়ী মূল্যে মাত্র ১৫ টাকায়। চলুক ফ্রেশনেশের অফুরন্ত উৎসব।</p>
                                    </div>
                                    <div className="singleAriclePostImage">
                                        <img src={SingleArticleImage} />
                                    </div>
                                </Link>
                                <div className="postShare">
                                    <ul>
                                        <li> <i class="fas fa-eye"></i> <span> 12k </span> </li>
                                        <li><i class="fab fa-facebook-f"></i></li>
                                        <li><i class="fab fa-twitter"></i></li>
                                        <li> <i class="far fa-share-square"></i> </li>
                                    </ul>
                                </div>
                            </div> 



                        </Col>
                        <Col lg={3}  md={4}>

                          <div className="PostCatagory">
                            <h3>বিভাগ সমূহ</h3>
                            <div className="PostCatagoryList">
                                <ul>
                                    <li>
                                        <Link to="/"> হোম </Link>
                                        <Link to="/"> ক্লেমন </Link>
                                        <Link to="/"> মোজো </Link>
                                        <Link to="/"> ফুরুটিকা </Link>
                                        <Link to="/"> স্পিড </Link>
                                        <Link to="/"> ডায়েরি </Link>
                                        <Link to="/"> অন্যান্য </Link> 
                                    </li>
                                </ul>
                            </div>
                          </div>

                          <div className="PostCatagory">
                            <h3> রিলেটেড আর্টিকেল </h3>

                            <Link to="/singleArticlePage" className="articlePost">

                                <div className="articlePostImage">
                                    <img src={a1} />
                                </div>

                                <div className="categoryPost">
                                    <div className="category">
                                        <p> Category </p>
                                    </div>
                                    <div className="date">
                                        <p> 26 / 10 / 19 </p>
                                    </div>
                                </div>

                                <div className="articleTitle">
                                    <h2>ফ্রেশনেশের অফুরন্ত</h2>
                                    <div className="postAuthor">
                                        <img src={authorImg} />
                                        <p> Md. Rafat Ali </p>
                                    </div>
                                    <p>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি. এখন আরও সাশ্রয়ী মূল্যে মাত্র ১৫ টাকায়।</p>
                                </div>

                            </Link> 

                            <Link to="/singleArticlePage" className="articlePost">

                                <div className="articlePostImage">
                                    <img src={a2} />
                                </div>

                                <div className="categoryPost">
                                    <div className="category">
                                        <p> Category </p>
                                    </div>
                                    <div className="date">
                                        <p> 26 / 10 / 19 </p>
                                    </div>
                                </div>

                                <div className="articleTitle">
                                    <h2>ফ্রেশনেশের অফুরন্ত</h2>
                                    <div className="postAuthor">
                                        <img src={authorImg} />
                                        <p> Md. Rafat Ali </p>
                                    </div>
                                    <p>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি. এখন আরও সাশ্রয়ী মূল্যে মাত্র ১৫ টাকায়।</p>
                                </div>

                            </Link> 

                            <Link to="/singleArticlePage" className="articlePost">

                                <div className="articlePostImage">
                                    <img src={a3} />
                                </div>

                                <div className="categoryPost">
                                    <div className="category">
                                        <p> Category </p>
                                    </div>
                                    <div className="date">
                                        <p> 26 / 10 / 19 </p>
                                    </div>
                                </div>

                                <div className="articleTitle">
                                    <h2>ফ্রেশনেশের অফুরন্ত</h2>
                                    <div className="postAuthor">
                                        <img src={authorImg} />
                                        <p> Md. Rafat Ali </p>
                                    </div>
                                    <p>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি. এখন আরও সাশ্রয়ী মূল্যে মাত্র ১৫ টাকায়।</p>
                                </div>

                            </Link> 

                            <Link to="/singleArticlePage" className="articlePost">

                                <div className="articlePostImage">
                                    <img src={a4} />
                                </div>

                                <div className="categoryPost">
                                    <div className="category">
                                        <p> Category </p>
                                    </div>
                                    <div className="date">
                                        <p> 26 / 10 / 19 </p>
                                    </div>
                                </div>

                                <div className="articleTitle">
                                    <h2>ফ্রেশনেশের অফুরন্ত</h2>
                                    <div className="postAuthor">
                                        <img src={authorImg} />
                                        <p> Md. Rafat Ali </p>
                                    </div>
                                    <p>ফ্রেশনেশের অফুরন্ত উৎসবে ক্লেমন ২৫০ মি.লি. এখন আরও সাশ্রয়ী মূল্যে মাত্র ১৫ টাকায়।</p>
                                </div>

                            </Link> 

                           </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
