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
                         
                            <CardTitle><h1>JPMorgan</h1>
                            </CardTitle>
                            <CardText>
                                I was part of Nautilus in GTI. I Worked on integrating Sauce Labs(a vendor product) with our pipeline to make it easy for the customers
                                to run integration tests for their services.
                                Since, this product was meant to be used across JPMC and bank has its own restrictions, we 
                                couldn't allow customers to directly onboard to the Sauce Labs.
                                Our team wrote API's for the customers that helped them enable their url and credentials 
                                for integration tests.
                            </CardText>
                            {/* <Button>Go somewhere</Button> */}
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle><h1>Amazon</h1></CardTitle>
                            <CardText>
                                I was part of the Gift Cards Team in Amazon Pay
                            <li>
                            Responsible for implementation of migration of Database for Refunds.
The old database had scaling issues. Migrated the
refund flow to use Dynamo DB to maintain the data. As part of this migration, I was responsible for the LLD
and implementing it and launching it end to end.
                                </li>

                            <li>The events visible on the Amazon Pay transaction history page
                                were migrated to new platform. Since I was part of gift cards team
                                we had to migrate to this new platform. I was sole owner for this migration.
                                I worked upon HLD, LLD, implementation and launch of the solution.
                                </li> 

                                <li>
                                VIP Partitioning on Tier-1 service on Prod environment with live traffic.
                                </li>

                            </CardText>
                             {/* <Button>Go somewhere</Button> */}
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle><h1>Microsoft</h1></CardTitle>
                            <CardText>
                                I am part of the Update Management team in Azure Cloud.
                                <li>While creating Schedule run configuration, customers used to bombard our service.
                                    We did not have a throttling logic in place. I worked upon researching about the 
                                    throttling solutions we can use that were present in microsoft.
                                    I worked upon the HLD, LLD and implementing and launching the solution.
                                </li>
                                <li>
                                    Our team was launching a new solution. We wanted to run some scale tests
                                    on our service to see the traffic our service could handle.
                                    I worked upon jmeter scripts and ran scale tests.
                                    Also, I looked into our service code to see the changes that will help in improving
                                    the scale.
                                </li>
                            </CardText>
                             {/* <Button>Go somewhere</Button> */}
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
