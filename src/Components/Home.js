import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="app">
                <div className="cardOuter">
                    <div className="card">
                        <Link to="./about" style={{ textDecoration: 'none' }}>
                            <div className="cardInner">
                                <div>Nadine</div>
                                <div>El Nesr</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="gridRow">
                    <div className="gridColumn3">
                        <Link to="./fashion" style={{ textDecoration: 'none' }}>
                            <button className="pageCardOuter">

                                <div className="pageCard">
                                    <div className="pageCardInner">
                                        <div>Fashion</div>
                                    </div>
                                </div>

                            </button>
                        </Link>
                    </div>
                    <div className="gridColumn3">
                        <Link to="./fineart" style={{ textDecoration: 'none' }}>
                            <div className="pageCardOuter">
                                <div className="pageCard">
                                    <div className="pageCardInner">
                                        <div>Fine Art</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="gridColumn3">
                        <Link to="./experimental" style={{ textDecoration: 'none' }}>
                            <div className="pageCardOuter">
                                <div className="pageCard">
                                    <div className="pageCardInner">
                                        <div>experimental</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to="./contact" style={{ textDecoration: 'none', color: 'white' }}>
                    <button className="workTogether">

                        <div>Let's Work Together!</div>

                    </button>
                </Link>
                <div className="socials">
                    <a href='https://www.facebook.com/artisanofthesoul/' target='_blank' rel="noopener noreferrer">
                        <img src={require('../assets/logos/fb_logo.png')} width={35} height={35} alt={'Facebook link'} />
                    </a>
                    <a href='https://www.instagram.com/artisanofthesoul/' target='_blank' rel="noopener noreferrer">
                        <img src={require('../assets/logos/ig_logo.png')} width={35} height={35} alt={'Instagram link'} />
                    </a>
                    <a href='https://www.linkedin.com/in/nadineelnesr' target='_blank' rel="noopener noreferrer" >
                        <img src={require('../assets/logos/in_logo.png')} width={35} height={35} alt={'LinkedIn link'} />
                    </a>
                    <a href='https://www.behance.net/nelnesrf055' target='_blank' rel="noopener noreferrer">
                        <img src={require('../assets/logos/be_logo.png')} width={35} height={35} alt={'Behance link'} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Home
