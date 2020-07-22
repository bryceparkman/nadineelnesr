import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class AdidasNike extends Component {
    render() {
        return (
            <div>
                <Container fluid responsive>
                    <Row>
                        <Col>
                        <div className="smileyTitle">
                            Smiley:
                        </div>
                        </Col>
                        <Col>
                            <Image fluid src={require('../assets/fashion/smiley/6CF05C09-12C4-41EF-A18C-E9A784F9A93F.PNG')} alt={'Fashion'} />
                        </Col>
                        <div className="smileyTitle">
                            Upcycled
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <div className='adidasNikeCenterText'>
                                “Always Looking to Be Happy And Kind To Others. Good Karma Everyday,” the back reads. SMILEY: an upcycled leather jacket aims at pushing the boundary and stereotype of "grunge" aesthetics to one that is positive. Styled with a white dress, the dichotomy created produces a "soft grunge" look.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image fluid src={require(('../assets/fashion/smiley/513CAF84-B577-4478-8F34-00A3A5511CCA.PNG'))} alt={'Fashion'}/>
                        </Col>
                        <Col>
                            <Image fluid src={require(('../assets/fashion/smiley/cover.PNG'))} alt={'Fashion'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="adidasNikeCenterText">
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

export default AdidasNike
