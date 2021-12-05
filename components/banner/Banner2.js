import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";
import profile from "../../assets/images/landingpage/tanyaprofile.jpg";
const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              Hey , I am Tanya
            </h1>
            <h4 className="subtitle font-light">
            Senior Software Enginner with a mission to help the community
            </h4>
            <a
              href="/professional"
              className="btn btn-info btn-rounded m-r-20 btn-md m-t-30 "
            >
              Corporate Journey
            </a>
            {/* <Link href="/#coming">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                Mentoring Experience
              </a>
            </Link> */}
              <a
              href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
              className="btn btn-info btn-rounded m-r-20 btn-md m-t-30 "
            >
              Mentoring Experience
            </a>

            

          </Col>
          <Col lg="4" md="4">
            <Image className="img-circle"  src={profile} alt="profile pic" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
