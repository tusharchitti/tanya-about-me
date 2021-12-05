/* eslint-disable */
import React from 'react';
import { CardImg, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import profile from "../../assets/images/landingpage/tanyaprofile.jpg";
const Cards = () => {
    return (
        <div>
            <div className="spacer" id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Worked with few biggest tech and fin-tech companies in the world.</h1>
                            <h6 className="subtitle">I have worked in Microsoft, Amazon and JPmorgan Chase.</h6>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="6">
                   
                        <Card body className="card-shadow">
                            <CardImg
                            src={profile}
                            alt="profile"
                            className="img-circle"
                            />
                        {/* <CardImg
                    width="50px"
                    height="50px"
                src="https://media.geeksforgeeks.org/wp-content/
                          uploads/20210425000233/test-300x297.png"
                    alt="GFG Logo" /> */}
                            <CardTitle><h1>JPMorgan</h1>
                            </CardTitle>
                            <CardText>Selenium grid is a vendor product from Sauce Labs that helps run tests simultaneously 
                                on multiple browser and os combinations. We developed rest api’s for teams to onboard users,
                                 their projects on our platform so that they can run their tests smoothly.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle><h1>Amazon</h1></CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.
                            <li>
                            Responsible for implementation of migration of Database for Refunds.
The old database was monolithic and had scaling issues. Migrated the
refund flow to use Dynamo DB to maintain the data.
                                </li>

                            <li>Designed and implemented the transactions history for a user using

event based processing. When a user performs transaction on ama-
zon pay for gift card, we get events. These events need to be published

to new platform withing apay. Used sns, sqs, serverless framework.
                                </li> 

                                <li>
                                VIP Partitioning on Tier-1 service on Prod environment with live traffic.
                                    </li>


                            </CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle><h1>Microsoft</h1></CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    {/* <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default Cards;
