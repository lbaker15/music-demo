import React from 'react';
import { motion } from "framer-motion";
import { useParams } from 'react-router-dom';
import data from './event-data';



function EventDetails({props}) {
    let {id} = useParams()
    // let num = (id === 'Martha Hill & The Velveteen Orkestra') ? 0 : (id === 'Fiery Bird Showcase Sessions Online – Damian Clarke + StEm') ? 1 : (id === 'Fiery Bird Showcase Sessions Online – Tom Gamble + Tara and Jaen') ? 2 : 3
    let item = data[id]
    let inc = Number(id) + 1
    console.log(inc, inc % 4)
    let color = (inc % 4 === 1) ? 'bg-aqua' : (inc % 4 === 2) ? 'bg-green' : (inc % 4 === 3) ? 'bg-lilac' : 'bg-purple'
    return (
        <React.Fragment>
                <motion.div 
                key="event-details-key"
                initial={{  x: '100%' }}
                animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0, duration: 0.5},
                }}
                // exit={{ x: '100%' }}
                >
                    <div  key="543" className={"event-details " + color}>
                        <div className="inner">
                            <div className="left">
                                <div className="image"
                                style={(Number(id) === 0) ? {backgroundImage: `url(${item.image})`, backgroundPosition: '100% 50%'} 
                                : {backgroundImage: `url(${item.image})`}}
                                ></div>
                            </div>
                            <div 
                            style={{minWidth: 'none'}}
                            class="right">
                                <h1>{item.title}</h1>
                                <h3>{item.description}</h3>
                                <h5><span>Event Time:</span> {item.date}</h5>
                            </div>
                        </div>
                    </div>
                </motion.div>
        </React.Fragment>
    )
}

export default EventDetails;