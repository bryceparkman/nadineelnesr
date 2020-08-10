import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class OneSixe extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="fashionTitle" style={{ color: 'rgb(52, 39, 228)' }}>
                                ONESIXE
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={{ color: 'white', textAlign: 'center', fontSize: 20, marginBottom: 30, letterSpacing: '0.2em', fontWeight: 100 }}>
                                The one size adjustable windbreaker
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image fluid src={require('../assets/fashion/onesixe/IMG_8611.PNG')} alt={'Fashion'} style={{ marginBottom: 50 }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='fashionCenterText'>
                                Features all over 3M channels<br />8 reflective drawstring locations<br />2 elasticated adjustable locations<br />Swarovski crystals pocket embellishments
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <Col lg>
                            <Image fluid src={require('../assets/fashion/onesixe/Snapseed.jpg')} alt={'Fashion'} style={{ marginBottom: 50 }} />
                        </Col>
                        <Col lg>
                            <Image fluid src={require('../assets/fashion/onesixe/IMG_7866.jpg')} alt={'Fashion'} style={{ marginBottom: 50 }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="fashionCenterText">
                                "ONESIXE” is an inclusive, one size fits all adjustable windbreaker that rejects traditional conventions of fitting a wide variety of sizes (e.g. stretching) and provides a ready to wear solution, carefully calculated to tailor waist, sleeves, shoulders, and length to the wearer's liking.
                            </div>
                        </Col>
                    </Row>
                    <Row className="fashionAlignRow">
                        <Col md={6} style={{ marginBottom: 20 }}>
                            <Image fluid src={require('../assets/fashion/onesixe/IMG_9115.jpg')} alt={'Fashion'} />
                        </Col>
                        <Col md={6}>
                            <div className='fashionColumnText'>
                                With inspiration drawn from curtains and everyday objects that can be tightened, loosened, and adjusted, this piece explores the binary of the wearable and non-wearable through its function. aesthetically, the duality of day and night, lifestyle and performance permeates and informs the design, detail, and fit of the jacket.
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="fashionTitle" style={{ color: 'rgb(52, 39, 228)' }}>
                    The Process
                </div>
                <Container fluid>
                    <Row>
                        <Col lg>
                            <Row>
                                <Col>
                                    <Image fluid src={require('../assets/fashion/onesixe/gathers 1.png')} alt={'Fashion'} style={{ height: 400, objectFit: 'cover' }} />
                                </Col>
                                <Col>
                                    <Image fluid src={require('../assets/fashion/onesixe/gathers2.png')} alt={'Fashion'} style={{ height: 400, objectFit: 'cover' }} />
                                </Col>
                            </Row>
                            <Row>
                                <div className='fashionCenterText'>
                                    Gathers created emulate ripples like a curtain, created using 3M channel, lace and grommets design
                                </div>
                            </Row>
                        </Col>
                        <Col lg>
                            <Row>
                                <Image fluid src={require('../assets/fashion/onesixe/experimental.png')} alt={'Fashion'} style={{ height: 400, objectFit: 'cover' }} />
                            </Row>
                            <Row>
                                <div className='fashionCenterText'>
                                    Fabric experimentation in order to produce most efficient channels for elasticated adjustments with cord holder at the end
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <Col>
                            <Image fluid src={require('../assets/fashion/onesixe/sleeveconstruction.png')} alt={'Fashion'} />
                        </Col>
                    </Row>
                    <Row>
                        <div className='fashionCenterText'>
                            Sample muslin mock up for the sleeve with consideration of adjustments
                        </div>
                    </Row>
                </Container>
                <div className="fashionTitle" style={{ color: 'rgb(52, 39, 228)' }}>
                    Fitting
                </div>
                <Container fluid>
                    <Row>
                        <Col md>
                            <Image fluid src={require('../assets/fashion/onesixe/fitting1.png')} alt={'Fashion'} style={{ marginBottom: 20 }} />
                        </Col>
                        <Col md>
                            <Image fluid src={require('../assets/fashion/onesixe/fitting2.png')} alt={'Fashion'} style={{ marginBottom: 20 }} />
                        </Col>
                        <Col md>
                            <Image fluid src={require('../assets/fashion/onesixe/fitting3.png')} alt={'Fashion'} style={{ marginBottom: 20 }} />
                        </Col>
                    </Row>
                    <Row>
                        <div className='fashionCenterText'>
                            After experimenting with adjustments for the waist and bottom half, this fitting allowed for problem solving on the upper half of the jacket targeting key areas such as shoulders and chest areas.
                        </div>
                    </Row>
                    <Row className='fashionAlignRow'>
                        <Col>
                            <Image fluid src={require('../assets/fashion/onesixe/IMG_7461.JPG')} alt={'Fashion'} style={{ marginBottom: 20 }} />
                        </Col>
                        <Col>
                            <div className='fashionColumnText'>
                                The essence of ONESIXE was created such that the piece can fit all body types with a personalized, on the go, tailored look (sans the tailor). The jacket is all inclusive and can fit body types ranging anywhere from XS petite to XXL.
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Carousel arrows infinite>
                    <img src={require('../assets/fashion/onesixe/P103.jpg')} alt={'Fashion'} />
                    <img src={require('../assets/fashion/onesixe/P102.jpg')} alt={'Fashion'} />
                    <img src={require('../assets/fashion/onesixe/IMG_7891.jpg')} alt={'Fashion'} />
                    <img src={require('../assets/fashion/onesixe/IMG_7892.jpg')} alt={'Fashion'} />
                    <img src={require('../assets/fashion/onesixe/P104.jpg')} alt={'Fashion'} />
                </Carousel>
                <Link to="../contact" style={{ textDecoration: 'none', color: 'white' }}>
                    <button className="workTogether">
                        <div>Let's Work Together!</div>
                    </button>
                </Link>
            </div>
        );
    }
}

export default OneSixe
