import React, { Component } from 'react'
import { Container , Row , Col , Dropdown , FormControl} from 'react-bootstrap'
import logo from '../images/logo.jpg'
import { Link } from "gatsby"
import userImage from '../images/user.png'

export default class LogoWrapper extends Component {
    render() {
        return (
            <div className="logoWrapper">
                <Container>
                    <Row>
                        <Col lg={9} sm={8} xs={3}>
                            <div className="logo">
                                 <Link to="/">  <img src={logo} /> </Link>
                            </div>
                        </Col>
                        <Col lg={2} sm={3} xs={7}>
                            <div className="inputFroms">
                               <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </div> 
                        </Col>
                        <Col lg={1} sm={1} xs={2}>
                             <div className="userImage">
                               
                               <Dropdown>
                                  <Dropdown.Toggle id="dropdown-basic">
                                      <img src={userImage} />   
                                  </Dropdown.Toggle> 
                                  <Dropdown.Menu>
                                      <Dropdown.Item href="/WriteABlog">Write a Bolg</Dropdown.Item>
                                      <Dropdown.Item href="/LoginFrom">Personal Settings</Dropdown.Item> 
                                  </Dropdown.Menu>
                              </Dropdown>
                          </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
