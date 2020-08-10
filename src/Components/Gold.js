import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import windowSize from 'react-window-size';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Gold extends Component {
    constructor() {
        super()
        this.state = {
            width: 300,
            numPages: null,
            pageNumber: 1
        }
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages })
    }
    getWidth = () => {
        let width = this.props.windowWidth;
        if (width > 1200) {
            return width / 3.5;
        }
        else if (width < 400) {
            return width / 1.1;
        }
        else {
            return width / 1.5;
        }
    }
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="fashionTitle" style={{ color: 'rgb(255, 115, 0)' }}>
                                Everything That Shines
                    </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} style={{ margin: 'auto' }}>
                            <Image fluid src={require('../assets/fashion/gold/IMG_7071.jpg')} alt={'Fashion'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="fashionTitle" style={{ color: 'rgb(255, 115, 0)' }}>
                                Isn't Always Gold
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='fashionCenterText'>
                                A project for those who immerse themselves in conceptually driven works. Drawing from the depths of the quintessential example of the “exotic and mysterious” ancient Eyptian world, an analysis of materials, research, identity, and methodologies are interrogated.
                            </div>
                        </Col>
                    </Row>
                    <Row className="fashionAlignRow">
                        <Col md={6} style={{ marginBottom: 20 }}>
                            <Image fluid src={require(('../assets/fashion/gold/necklace.PNG'))} alt={'Fashion'} />
                        </Col>
                        <Col md={6}>
                            <div className='fashionColumnText'>
                                JEWELRY inspiration derived from ancient egyptian collars, symbols, and ideas of adornment. Handcrafted using deconstructed old jewelry, scraps of old muslin, along with embroidery. The Eye of Horus stands as a symbol of protection, royal power, and good health.
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <div className="fashionTitle" style={{ color: 'rgb(255, 115, 0)' }}>
                        The Process
                    </div>
                    <Row >
                        <div style={{ margin: 'auto' }}>
                            <Document
                                file={require('../assets/fashion/gold/process.pdf')}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                            >
                                <Page width={this.getWidth()} pageNumber={this.state.pageNumber} noData={<div style={{ width: this.getWidth(), height: this.getWidth() * 1.41281139, backgroundColor: '#fff' }} />} loading={<div style={{ width: this.getWidth(), height: this.getWidth() * 1.41281139, backgroundColor: '#fff' }} />} />
                            </Document>
                            <div class="pagination">
                                <button onClick={() => this.setState(prevState => ({ pageNumber: prevState.pageNumber > 1 ? prevState.pageNumber - 1 : prevState.pageNumber }))}>&lt;</button>
                                <p>{this.state.pageNumber} / {this.state.numPages}</p>
                                <button onClick={() => this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }))}>&gt;</button>
                            </div>
                        </div>
                    </Row>
                    <div className='fashionCenterText'>
                        Explore the journey from idea to creation to finalization as curated by the artist.
                    </div>
                </Container>
                <Container fluid>
                    <div className="fashionTitle" style={{ color: 'rgb(255, 115, 0)' }}>
                        Details &amp; Finish
                    </div>
                    <Row className="fashionRow">
                        <Col md={6} style={{ marginBottom: 20 }}>
                            <Image fluid src={require(('../assets/fashion/gold/IMG_7076.jpg'))} alt={'Fashion'} />
                        </Col>
                        <Col md={6}>
                            <div className='fashionColumnText'>
                                SLEEVES combine three ruffles that signify layers and conceptual complexity. Gold, whether physical or metaphorical is often found where it is least expected. Physically, the gold ruffle is placed as treasure in between trash.
                                <br style={{ margin: '1em 0' }} />
                                SKIRT emulates the aged and rustic look of papyrus and serves to pay respect for the advancement of such objects.
                            </div>
                        </Col>
                    </Row>
                    <Row className="fashionAlignRow">
                        <Col md={6}>
                            <div className='fashionColumnText'>
                                “EYES TO SEE AND EARS TO HEAR,” big ruffle and embroidery serve this concept. The golden background can be thought of as a shield or related to the sun. Understanding the purpose of the human body is intertwined with nature.
                                <br style={{ margin: '1em 0' }} />
                                SILVER TWISTS act as projections and rays of sunlight, extending love literally from areas that surround the heart and soul.
                                <br style={{ margin: '1em 0' }} />
                                SILVER CHUNKS are functional as they serve as buttons as well as a literal contrast to the golden elements of the garment.
                            </div>
                        </Col>
                        <Col md={6} style={{ marginBottom: 20 }}>
                            <Image fluid src={require(('../assets/fashion/gold/IMG_7075.jpg'))} alt={'Fashion'} />
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <Col lg>
                            <Image fluid src={require('../assets/fashion/gold/cover.jpg')} alt={'Fashion'} />
                        </Col>
                        <Col lg>
                            <Image fluid src={require('../assets/fashion/gold/IMG_7073.jpg')} alt={'Fashion'} />
                        </Col>
                    </Row>
                    <div className='fashionCenterText'>
                        This garment accentuates the process as a nonlinear route and emulates that of a spiral, one that values introspection; the process proves more important  than the outcome. Its take on status quo brings in the dynamic of the passage of time. It reiterates and emphasises the ability of how tradition can persist, but how true love can overpower and provide contrast within these spaces of displacement. It is finding a space to call home when home may not exist within the realms of material. It is looking for a higher purpose, one that creates a sense of eternal place with those around you even when it may cease to exist.  The garments call for a mood that is everlasting, one that is passionate.
                    </div>
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

export default windowSize(Gold);
