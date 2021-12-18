/* eslint-disable */
import React from 'react';
import { CardImg, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import profile from "../../assets/images/landingpage/tanyaprofile.jpg";
import HeaderComponent from "../custom/sections/headercomponent";
const Services = () => {
    return (
        <div>
             <HeaderComponent />
            <Container>
                <Row>
                    <Col md="6">
                   
                        <Card body className="card-shadow">
                         
                            <CardTitle><h1>Mentoring</h1>
                            </CardTitle>
                            <CardText>
                                I have been helping college students and recent grads in bagging 
                                offers from their dream companies.
                                I am working with Scaler Academy and Masai school as a mentor.
                                I love sharing my experiences and it makes me happy if i am able to 
                                help people.
                                Happy to help you!!
                            </CardText>
                           
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle><h1>Resume Writing</h1></CardTitle>
                            <CardText>
                               Having applied at different firms, I know what it takes
                               to have a good resume. A resume that can impress in first look 
                               is important. As they say, first impression is the last one.
                               I master the skill of resume writing.
                            </CardText>
                            
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle><h1>Mock Interviews</h1></CardTitle>
                            <CardText>
                               I have interviewed with Google, Amazon, Microsoft,Goldman Sachs and
                               so many others. You name it and i can tell you what do they look for 
                               in a good SDE.
                               I have also interviewed various folks at Amazon and also have been involved
                               with Scaler and Masai in taking mock interviews. I also take interviews
                               for various firms as part of interview vector.
                            </CardText>
                        </Card>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    );
}

export default Services;
