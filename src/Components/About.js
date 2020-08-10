import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
    render() {
        return (
            <div className="app">
                <div className="aboutLargeText" id="designer">
                    Designer
                </div>
                <div className="aboutLargeText" id="fineArtist">
                    Fine Artist
                </div>
                <div className="about">
                    <div className="aboutImg">
                        <img src={require('../assets/aboutme/IMG_6915.jpg')} alt={'Nadine'} />
                    </div>
                    <div className="aboutText">
                        Nadine El Nesr is recognized by her unique and elegant approach to fashion and fine arts. Her work is centered upon conceptual ideas that translate to functional and tactical design, concentrated in technology, sustainability, and luxury wear. Interests are indicative of the importance of health and fitness as well as activism on sociopolitical issues that go beyond status quo.
                        <br/><br/>
                        Nadine El Nesr’s paintings have been globally exhibited in public and private collections. Her work “Floral Mind” received a Gold Key and Silver Medal in the Scholastic Art Competition, placing her in the top 3% of submissions nationally in 2018. Since then, she has contributed in magazine publications and continued expanding her knowledge and skillset in design fields. She is an Apparel Designer at Rhode Island School of Design with a concentration in History, Philosophy, and Social Sciences while actively pursuing a second in Nature Culture Sustainability Studies.
                        <br/><br/>
                        <img src={require('../assets/aboutme/IMG_8464.PNG')} alt={'Signature'} className="signature"/>
                    </div>
                    <Row style={{marginTop: 50}}>
                        <Col md={6} style={{margin: 'auto'}}>
                            <Image fluid src={require('../assets/aboutme/resume.jpg')} alt={'Signature'}/>
                        </Col>
                        
                    </Row>
                    
                </div>

            </div>
        );
    }
}

export default About
