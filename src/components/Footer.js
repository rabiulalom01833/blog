import React, {Component} from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import { Link } from "gatsby"
import logoFooter from '../images/logo.jpg'
 
  
export default class Footer extends Component {
    render() {
        return (
            <div className="FooterArea pt">
                <Container>
                    <Row> 
                        <Col lg={3}>
                            <div className="quick-detail text-center">
                                <div className="first-widget">
                                    <img src={logoFooter} />
                                     
                                </div> 
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="quick-address">
                              <h2>Contact Us</h2>
                                <div className="quick-icon">
                                        <ul>
                                            <li> <span> <i class="fas fa-phone"></i> </span>  <a> +880 96131 16609 </a>  </li>
                                            <li> <span><i class="far fa-envelope"></i></span>  <a> info@akij.net  </a> </li>
                                               
                                        </ul>
                                    </div>
                                </div>
                        </Col>
                        <Col lg={4}>
                            <div className="quick-address">
                                <h2> Important Links </h2>
                            </div>
                            <div className="single-widget-menu">
                                <ul>
                                    <li><a href="https://www.akijfood.com/" target="_blanck">Akij Food</a></li>
                                    <li><a href="https://book.akij.net/login" target="_blanck">Book</a></li>
                                    <li><a href="https://survey.akij.net/" target="_blanck">Survey</a></li>  
                                </ul>
                            </div>

                            <div className="single-widget-menu">
                                <ul>
                                   
                                    <li><a href="https://trust.akij.net/" target="_blanck">Trust</a></li>
                                    <li><a href="https://contactcenter.akij.net/" target="_blanck">Contact Center</a></li>
                                    <li><a href="https://shop.akij.net/" target="_blanck">E-Commmerce Shop</a></li> 
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <div className="copy">
                                <p> &copy; Copyright © 2019 ASLL. All rights reserved. Developed by <a href="http://www.akij.net" target="_blanck"> <b>Akij Group IT</b></a> </p>
                            </div>
                        </Col>
                    </Row>
                     
                </Container>
            </div>
        )
    }
}
 

 