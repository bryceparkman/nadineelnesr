import React, { Component } from 'react';
import { Link } from "react-router-dom";
import withOverlay from './HoverOverlay';
import Image from 'react-bootstrap/Image'

class Home extends Component {
    constructor() {
        super();
        this.images = []
        this.imagesPerRow = 0
    }
    importAll(r) {
        return r.keys().map(r);
    }
    componentDidMount() {
        this.images = this.importAll(require.context('../assets/fineart/paintings', false, /\.(png|jpe?g)$/));
        this.images.push(...this.importAll(require.context('../assets/fineart/drawings', false, /\.(png|jpe?g)$/)))
        this.imagesPerRow = Math.ceil(this.images.length / 4)
    }
    displayImages() {
        const newImages = []
        for (let i = 0; i < this.images.length; i += this.imagesPerRow) {
            newImages.push(
                <div key={i} className="gridColumn">
                    {this.getSubImages(i)}
                </div>)
        }
        return newImages
    }
    getSubImages(i){
        const subImages = [];
        for(let j = 0; j < this.imagesPerRow; j++){
            if(this.images[i+j] !== undefined){
                const Img = () => <Image className="test" key={i+j} src={this.images[i+j]} alt='info'/>
                const ImgWithOverlay = withOverlay(Img,this.images[i+j].substring(this.images[i+j].lastIndexOf('/')+1,this.images[i+j].indexOf('.')))
                subImages.push(
                    <ImgWithOverlay key={i+j}/>
                )
            }
        }
        return subImages
    }
    render() {
        return (
            <div className="app">
                <div className="gridRow">
                    {this.displayImages()}
                </div>
            </div>

        );
    }
}

export default Home
