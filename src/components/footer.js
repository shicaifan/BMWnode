import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
    return (
        <Footer color="black" className="font-small pt-4 mt-4">
            <Container fluid className="text-center text-md-center">
                <Row>
                    <Col md="12">
                    {/* Circle BMW Logo Here */}
                    {/* <h5><a href="https://www.circlebmw.com/">CircleBMW</a></h5> */}
                    <a href="https://www.circlebmw.com/" target="_blank"><img alt="" width='10%'
                    className="img-fluid"
                    src="img/circle_bmw_footer.png"/></a>
                </Col>
                </Row>
                <Row>
                    <Col md="6">
                    {/* Properly Formatted Links. Image Separators */}
                    <h5><a href="\" >HOME </a> | 
                        <a href="https://www.circlebmw.com/about-us/" target="_blank"> ABOUT</a> |
                        SUPPORT
                    </h5>
                    </Col>
                    <Col md="6">
                    <h3><a href="https://www.twitter.com/circlebmwsales" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/CircleBMW/?rf=531458853668117" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>        
                        <a href="https://www.instagram.com/circlebmw/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </h3>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "} CircleBMW
                </Container>
            </div>
            </Footer>
        );
    }
}

export default FooterPage;