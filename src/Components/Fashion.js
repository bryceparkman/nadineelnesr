import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{height: 75}}></div>
                <Container fluid responsive>
                    <Row>
                        <Col md>
                            <Link to="./fashion/adidasnike">
                                <Image fluid src={require('../assets/fashion/adidasnike/IMG_3544.JPG')} alt={'Fashion'}/>
                            </Link>
                        </Col>
                        <Col md>
                            <Link to='./fashion/smiley'>
                                <Image fluid src={require('../assets/fashion/smiley/COVER PHOTO.GIF')} alt={'Fashion'}/>
                            </Link>
                        </Col>
                        <Col md>
                            <Image fluid src={require('../assets/fashion/sea/FullSizeRender.jpg')} alt={'Fashion'}/>
                        </Col>
                        <Col md>
                            <Image fluid src={require('../assets/fashion/gold/IMG_6915.jpg')} alt={'Fashion'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home
