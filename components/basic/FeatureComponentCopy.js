/* eslint-disable */
import React from "react";
import { CardImg, CardImgOverlay, CardTitle,CardText ,Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img5 from "../../assets/images/features/feature30/feature-img.jpg";
import img6 from "../../assets/images/professional/amazonPaylogo.png";
import HeaderComponent from "../custom/sections/headercomponent";

const FeatureComponentCopy = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              {/* <h1 className="title font-bold">Amazon</h1> */}
              <h6 className="subtitle">
               My tech experience is varied. I have worked on different tech like java,
               .net, angular, react, node.js, nosql and sql db, azure and aws providers.
               My expertise lies in solving challenging problems. Tech is not a blocker for me. 
               I have revamped the refunds flow for amaon pay gift cards.
               I have launched the throttling solution for our update management service in Azure cloud.
              </h6>
              <div>

                  </div>

            </Col>
            <Col md="5" className="text-center">
            <div  className="rounded">
            <Image className="img-circle"  src={img6} alt="profile pic" />
            {/* <Image
                          src={img6}
                          height="100"
                          width="120"
                          className="rounded img-circle"
                          alt="img"
                        /> */}
                </div>
            </Col>
          </Row>
        </Container>
      </div>

<div>
  
</div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    
                    <h3 className="title">
                      Enough of boasting about myself
                    </h3>
                    <p>
                      Why dont you buy a giftcard ,its working and you are happy
                      thats the best way to show my credentials. 
                    </p>
                    <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      target="_blank"
                      href="https://www.amazon.in/gift-card-store/b?ie=UTF8&node=3704982031"
                    >
                      <span>
                        Buy a Gift Card <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponentCopy;
