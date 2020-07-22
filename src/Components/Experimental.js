import React, { Component } from 'react';

class Experimental extends Component {
    constructor() {
        super();
        this.images = []
        this.imagesPerRow = 0
    }
    importAll(r) {
        return r.keys().map(r);
    }
    componentDidMount() {
        this.images = this.importAll(require.context('../assets/experimental', false, /\.(png|jpe?g)$/));
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
            subImages.push(
                <img key={i+j} src={this.images[i+j]} alt='info'/>
            )
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

export default Experimental
