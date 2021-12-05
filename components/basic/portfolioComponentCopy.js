/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
// import img1 from "../../assets/images/portfolio/img1.jpg";
// import img2 from "../../assets/images/portfolio/img2.jpg";
// import img3 from "../../assets/images/portfolio/img3.jpg";
// import img4 from "../../assets/images/portfolio/img4.jpg";
// import img5 from "../../assets/images/portfolio/img5.jpg";
// import img6 from "../../assets/images/portfolio/img6.jpg";
import img4 from "../../assets/images/professional/amazonLambda.png";
import img5 from "../../assets/images/professional/metrics.png";
import img6 from "../../assets/images/professional/databases.jpeg";
import img2 from "../../assets/images/professional/infrastructureAsCode.png";
import img1 from "../../assets/images/professional/java.jpg";
import img3 from "../../assets/images/professional/sns_sqs.jpg";

const PortfolioComponentCopy = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Tools and Technoligies used to build amazing features</h2>
              <h6 className="subtitle">
               Building scalable products is possible only after we have good knowledge of tools
               Below are tools which i used in my day to day life 
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">
                    Java
                  </h5>
                  <p className="m-b-0 font-14">Wrote most of code in it</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img2}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Infrastrucrue as Code</h5>
                  <p className="m-b-0 font-14">Used TypeScript to write infra as code</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img3}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">SNS-SQS(Pub Sub)</h5>
                  <p className="m-b-0 font-14">In Distributed system to increase relaibility we add pub/Sub. 
                  Used SNS/sqs for that</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img4}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">AWS Lambda</h5>
                  <p className="m-b-0 font-14">Used Lambda as a compute resource.
                  It was a hard call between a lambda , EC2 and Amazon internal compute platforms</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img5}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Cloud Watch Metrics</h5>
                  <p className="m-b-0 font-14">Whata a service without metrics,
                   Set up complete instrumentation for our services</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img6}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">DynamoDb</h5>
                  <p className="m-b-0 font-14">Well we need place to data,
                   and what better than one of the most Sscalable datbases</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponentCopy;
