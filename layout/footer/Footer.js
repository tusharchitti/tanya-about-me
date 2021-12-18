/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4">
      <br></br>
      <Container>
        <Row>
          {/* <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Address</h5>
            <p>71 Amsteroum Avenue Cronish Night, NY 35098</p>
          </Col> */}
          <Col lg="4" md="6" className="m-b-10">
            <h5 className="m-b-20">Phone</h5>
            <p>
              Office : +917696472776
            </p>
          </Col>
          <Col lg="4" md="6" className="m-b-10">
            <h5 className="m-b-20">Email</h5>
            <p>
              Office :
              <Link href="#">
                <a className="link">tanyagarg99140@gmail.com</a>
              </Link>
            </p>
          </Col>
          <Col lg="4" md="6">
            
            <div className="round-social light">
              
              
              <Link href="https://www.linkedin.com/in/tanyagarg2811/">
                <a className="link">
                  <i className="fa fa-linkedin"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
