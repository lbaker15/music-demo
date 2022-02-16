import React from 'react';
import { Canvas, glsl } from 'glsl-canvas-js';
import {frag} from './webgl/frag';
import { Link } from 'react-router-dom';
// import {image} from '../images/hi-records-logo.svg';


class Intro extends React.Component {    
   sizer = function (canvas) {
        const s = 500
        canvas.style.width = s + "px"
        canvas.style.height = s + "px"
    }
    myRef = React.createRef()
    heightRef = React.createRef()
    parentRef = React.createRef()
    componentDidMount() {
        let gls = new Canvas(this.myRef.current);
        this.sizer(this.myRef.current)
    
        gls.setUniform("scroll", 0)
        gls.setUniform("innerColors", 
            [0.977, 0.989, 0.641, 1.0], 
            [0.773, 0.711, 1.000, 1.0],
            [0.963, 0.649, 0.646, 1.0]
        )
        gls.setUniform("midColors", 
            [1.000, 0.713, 0.216, 1.0], 
            [0.730, 0.901, 0.201, 1.0],
            [0.533, 0.941, 1.000, 1.0]
        )
        gls.setUniform("outerColors", 
            [1.000, 0.245, 0.226, 1.0], 
            [0.071, 0.557, 0.300, 1.0],
            [0.000, 0.206, 0.758, 1.0]
        )
        gls.load(frag)
        const scrollFunc = () => {
            let newVal = this.parentRef.current.scrollTop / this.heightRef.current.clientHeight;
            gls.setUniform("scroll", newVal)
        }
        this.parentRef.current.addEventListener("scroll", scrollFunc)
        window.addEventListener('resize', () => {
            this.sizer(this.myRef.current)
            gls.load(frag)
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="white-bg"></div>
                <div ref={this.parentRef} className="home">
                    <div className="left">
                        <canvas ref={this.myRef}></canvas>
                    </div>
                    <div ref={this.heightRef} className="right">     
                        
                        <div className="section">
                            <h1><Link to="/event-details/0">Name of Event</Link></h1>
                            <h3>Some event details, some event details</h3>
                            <h4>01/01/2022</h4>
                        </div>
                        <div className="section">
                            <h1><Link to="/event-details/0">Name of Event</Link></h1>
                            <h3>Some event details, some event details</h3>
                            <h4>01/01/2022</h4>
                        </div>
                        <div className="section">
                            <h1><Link to="/event-details/0">Name of Event</Link></h1>
                            <h3>Some event details, some event details</h3>
                            <h4>01/01/2022</h4>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Intro;