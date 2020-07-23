import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import withOverlay from './HoverOverlay'

const Card1 = () => 
    <Link to="./fashion/adidasnike">
        <Image fluid className="fashionCard" src={require('../assets/fashion/adidasnike/IMG_3544.JPG')} alt={'Fashion'} />
    </Link>
const OverlayCard1 = withOverlay(Card1,'Adidas X Nike');

const Card2 = () => 
    <Link to="./fashion/smiley">
        <Image fluid className="fashionCard" src={require('../assets/fashion/smiley/cover.GIF')} alt={'Fashion'} />
    </Link>
const OverlayCard2 = withOverlay(Card2,'Smiley');

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ height: 75 }}></div>
                <Container fluid responsive>
                    <Row>
                        <Col lg>
                            <OverlayCard1/>
                        </Col>
                        <Col lg>
                            <OverlayCard2/>
                        </Col>
                        <Col lg>
                            <Image fluid className="fashionCard" src={require('../assets/fashion/sea/FullSizeRender.jpg')} alt={'Fashion'} />
                        </Col>
                        <Col lg>
                            <Image fluid className="fashionCard" src={require('../assets/fashion/gold/IMG_6915.jpg')} alt={'Fashion'} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home
