import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class AdidasNike extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row >
                        <Col>
                            <div className="fashionTitle" style={{ color: 'rgb(255, 115, 0)' }}>
                                Adidas x Nike
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image fluid src={require('../assets/fashion/adidasnike/IMG_8786.GIF')} alt={'Fashion'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='fashionCenterText'>
                                Envisioned collaboration between Adidas and Nike breaking cross branding "rules" between two competitor companies. Constructed and designed using old Adidas and Nike gear, practicing sustainable fashion.
                            </div>
                        </Col>
                    </Row>
                    <Row className="fashionAlignRow">
                        <Col md={6} style={{ marginBottom: 20 }}>
                            <Image fluid src={require(('../assets/fashion/adidasnike/fashionrules.JPG'))} alt={'Fashion'} />
                        </Col>
                        <Col md={6}>
                            <div className='fashionColumnText'>
                                This piece challenges the notion of competition to one that considers working together to accomplish goals and making breakthroughs, not one that creates adversaries and sides. But who doesn't love a little healthy competition, right?
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 50 }}>
                        <Col lg={6}>
                            <Image fluid src={require('../assets/fashion/adidasnike/IMG_4618.JPG')} alt={'Fashion'} style={{ marginBottom: 20 }} />
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col>
                                    <Image fluid src={require('../assets/fashion/adidasnike/IMG_9139.JPG')} alt={'Fashion'} style={{ marginBottom: 20 }} />
                                </Col>
                            </Row>
                            <Row className="h-50">
                                <Col className="align-self-center">
                                    <div className="adidasNikeQuote">
                                        “Eat with your people, don't compete with your people.”
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg>
                            <Image fluid src={require('../assets/fashion/adidasnike/IMG_1979.JPG')} alt={'Fashion'} style={{ marginBottom: 50 }} />
                        </Col>
                        <Col lg>
                            <Image fluid src={require('../assets/fashion/adidasnike/IMG_8790.GIF')} alt={'Fashion'} style={{ marginBottom: 50 }} />
                        </Col>
                        <Col lg>
                            <Image fluid src={require('../assets/fashion/adidasnike/IMG_4355.JPG')} alt={'Fashion'} style={{ marginBottom: 50 }} />
                        </Col>
                    </Row>
                </Container>
                <Link to="../contact" style={{ textDecoration: 'none', color: 'white' }}>
                    <button className="workTogether">

                        <div>Let's Work Together!</div>

                    </button>
                </Link>
            </div>
        );
    }
}

export default AdidasNike
