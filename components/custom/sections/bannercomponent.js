/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import { PopupButton, PopupWidget } from "react-calendly"
import herobanner from "../../../assets/images/staticslider/slider/hero-banner.jpg";
const BannerComponent = () => {
  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <span className="label label-rounded label-inverse">
                Helping  hand that everyone needs
              </span>
              <h1 className="title">Connect With me and ask any questions</h1>
              <h6 className="subtitle op-8">
                If you are not sure if i can help you out , you can still connect with 
                adding agenda in calendly link.
              </h6>
                <PopupButton
      className="btn btn-light btn-rounded btn-md m-t-20"           
     color="#00a2ff"
     text="Block my Calendar"
     textColor="#ffffff"
     url="https://calendly.com/tanyagarg"
   />
            </Col>
            <Col md="6">
              <Image src={herobanner} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
