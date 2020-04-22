import React, { Component } from 'react'
import { Link } from "gatsby"
import { Navbar, Nav , Container} from "react-bootstrap"

export default class Navigation extends Component {
    render() {
        return (
            <Navbar expand="lg" id="site-navbar">
            <Container>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <Link to="/" className="link-no-style">  <Nav.Link as="span" eventKey="">  মূলপাতা </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page1"> সাহিত্য  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> প্রযুক্তি  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> অর্থনীতি  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> ভ্রমণ  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> স্বাস্থ্য ও চিকিৎসা  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> সাম্প্রতিক সময়  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> ইতিহাস ,খেলাধুলা  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> বিশ্ব  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> বিজ্ঞান ,উদ্বোধনী চিন্তা  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> বই ও সিনেমা  </Nav.Link>  </Link>
                <Link to="/allArticlePage" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> খাবার রেসিপি  </Nav.Link>  </Link>

              </Nav> 
            </Navbar.Collapse>

            </Container>
          </Navbar>
        )
    }
}
