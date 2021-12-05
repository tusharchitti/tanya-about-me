/* eslint-disable */
import React from "react";
import { CardImg, CardImgOverlay, CardTitle,CardText ,Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/features/feature13/img1.jpg";
import img2 from "../../assets/images/features/feature13/img2.jpg";
import img3 from "../../assets/images/features/feature13/img3.jpg";
import img4 from "../../assets/images/features/feature13/img4.jpg";
import img5 from "../../assets/images/features/feature30/feature-img.jpg";
import img6 from "../../assets/images/professional/amazonPaylogo.png";
const FeatureComponentCopy = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Amazon</h1>
              <h6 className="subtitle">
                Worked as a software Engineer in Amazon Pay Gift Card Team.
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
      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-danger label-rounded">
                Feature 1
              </span>
              <h2 className="title">Migrated complete Gift Card service from Monolith to Microservice</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Migrated TO DynamoDB</h5>
                  <p className="m-t-20">
              Completly implemented the Gift-card workflows and ensured that these is no Downtime.
                  </p>
                  <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Bug Free GA</h5>
                  <p className="m-t-20">
                    Build a solution wwhich ensures that we have two parallel data sources on sync , and we can toggle between those ,
                    untill we are confident about our deployments
                  </p>
                  <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-info label-rounded">Feature 2</span>
              <h2 className="title">Amazon Pay Event Remodelling</h2>
              <h6 className="subtitle">
                Worked on remodelling amazon event pay system. As part of transactions we used to send events. 
                Revamped and implemented the complete flow.
              </h6>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img6}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Designed and implemented end to end flow
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img2}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Set up monitoring infrastructure
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img3}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Used Serverless Architecture
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img4}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
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
                    <span className="label label-info label-rounded">
                      Feature 3
                    </span>
                    <h3 className="title">
                      Enough of boasting about myself
                    </h3>
                    <p>
                      Why dont you buy a giftcard , It its working and you are happy
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
