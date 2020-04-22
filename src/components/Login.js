import React, { Component } from 'react'
import { Container , Row , Col , Form , Button, Card , Tabs , Tab} from "react-bootstrap"
import logImage from '../images/images.png'

export default class Login extends Component {

    

    render() {
        return (
            <div className="login bp">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Tabs defaultActiveKey="login" transition={false} id="uncontrolled-tab-example">

                                <Tab eventKey="login" title="LOGIN">

                                    <Card className="p-3">

                                        <div className="logoImage">
                                            <img src={logImage} />
                                        </div>

                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label> Username or E-mail </Form.Label>
                                                <Form.Control type="email" placeholder="Type Your username or email" /> 
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label> Password </Form.Label>
                                                <Form.Control type="password" placeholder="Type Your Password" />
                                            </Form.Group>
                                            
                                            <Button variant="primary" type="submit">
                                                LOGIN <i class="fas fa-sign-in-alt"></i>
                                            </Button>
                                           
                                        </Form>
                                    </Card>
                                </Tab>

                                <Tab eventKey="register" title="REGISTER">
                                  
                                    <Card className="p-3">
                                       <div className="logoImage">
                                            <img src={logImage} />
                                        </div>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label> Username </Form.Label>
                                                <Form.Control type="text" placeholder="Type Your username" /> 
                                            </Form.Group>

                                            
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label> E-mail Address </Form.Label>
                                                <Form.Control type="email" placeholder="Type Your email" /> 
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label> Password </Form.Label>
                                                <Form.Control type="password" placeholder="Type Your Password" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label> Confirm Password </Form.Label>
                                                <Form.Control type="password" placeholder="Type Your Confirm Password" />
                                            </Form.Group> 
                                            <br/>
                                            <Button variant="primary" type="submit">
                                               REGISTER <i class="fas fa-user-plus"></i>
                                            </Button> 
                                        </Form>
                                    </Card>
                                </Tab>
                                 
                            </Tabs>
                          
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
