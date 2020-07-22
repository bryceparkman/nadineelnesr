import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="mailto:nadine.elnesr@gmail.com" style={{ textDecoration: 'none', color: 'white' }}>
                    <button className='contactEmail'>
                        nadine.elnesr@gmail.com
                    </button>
                </Link>
                <Container fluid responsive>
                    <Row>
                        <Col>
                            <a href='https://www.facebook.com/artisanofthesoul/' target='_blank' rel="noopener noreferrer">
                                <img src={require('../assets/logos/fb_logo.png')} className='contactLogo' alt={'Facebook link'} />
                            </a>
                        </Col>
                        <Col>
                            <a href='https://www.instagram.com/artisanofthesoul/' target='_blank' rel="noopener noreferrer">
                                <img src={require('../assets/logos/ig_logo.png')} className='contactLogo' alt={'Instgram link'} />
                            </a>
                        </Col>
                        <Col>
                            <a href='https://www.linkedin.com/in/nadineelnesr' target='_blank' rel="noopener noreferrer">
                                <img src={require('../assets/logos/in_logo.png')} className='contactLogo' alt={'LinkedIn link'} />
                            </a>
                        </Col>
                        <Col>
                            <a href='https://www.behance.net/nelnesrf055' target='_blank' rel="noopener noreferrer">
                                <img src={require('../assets/logos/be_logo.png')} className='contactLogo' alt={'Behance link'} />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home
