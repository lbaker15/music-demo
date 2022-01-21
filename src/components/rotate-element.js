import React from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


class RotateElement extends React.Component {

    componentDidMount() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".circle-rotate", {
            rotate: 360,
            duration: 2,
            delay: 1,
            scrollTrigger: {
              trigger: "#root",
              scrub: 1,
              start: 'top top',
              end: "bottom bottom",
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                <div class="circle-contain">
                    <div class="circle-rotate">
                        <svg viewBox="0 0 100 100" width="100" height="100">
                        <defs>
                            <path id="circle"
                            d="
                                M 50, 50
                                m -37, 0
                                a 37,37 0 1,1 74,0
                                a 37,37 0 1,1 -74,0"/>
                        </defs>
                        <text fontSize="7" fontFamily="IBM Plex Sans" class="font-semibold">
                            <textPath href="#circle">
                            Regular live events & high quality food & drink
                            </textPath>
                        </text>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RotateElement;