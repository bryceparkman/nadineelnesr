import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class Smiley extends Component {
    render() {
        return (
            <div>
                <Container fluid responsive className="smileyTimeline">
                    <Row>
                        <Col>
                            <Image fluid src={require('../assets/fashion/smiley/header.png')} alt={'Fashion'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='fashionCenterText'>
                                “Always Looking to Be Happy And Kind To Others. Good Karma Everyday,” the back reads. SMILEY: an upcycled leather jacket aims at pushing the boundary and stereotype of "grunge" aesthetics to one that is positive. Styled with a white dress, the dichotomy created produces a "soft grunge" look.
                            </div>
                        </Col>
                    </Row>
                    <Row style={{display: 'flex', alignItems: 'center' }}>
                        <Col lg>
                            <Image fluid src={require(('../assets/fashion/smiley/sit.PNG'))} alt={'Fashion'}/>
                        </Col>
                        <Col lg>
                            <Image fluid src={require(('../assets/fashion/smiley/stand.png'))} alt={'Fashion'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="fashionCenterText">
                                The jacket features print from a discarded shirt and relocated studs which can be seen around the mouth of the smile and the sleeve. Handcrafted  and placed patches read, “optimistic mood” and “Have a Nice day” 
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Link to="./contact" style={{ textDecoration: 'none', color: 'white' }}>
                    <button className="workTogether">

                        <div>Let's Work Together!</div>

                    </button>
                </Link>
            </div>
        );
    }
}

export default Smiley
