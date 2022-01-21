import React from 'react';
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import CardItem from './card-item';
import Image3 from './images/3.jpg';
import Image4 from './images/4.jpg';
import { motion } from "framer-motion";
import data from './event-data';



class Events extends React.Component {
    render() {
        return (
            <motion.div 
            key="about-key"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.5},
            }}
            // exit={{ opacity: 0, y: 20 }}
            >
            <React.Fragment key="314">
                <div class="w-full cards px-20">
                   {data.map(item => {
                       return (
                        <CardItem 
                        key={item.title}
                        larger={true}
                        link={`/event-details/${String(item.id)}`}
                        title={item.title}
                        image={item.image} 
                        date={item.date}
                        text={String(item.description)} />
                       )
                   })}

                </div>
            </React.Fragment>
            </motion.div>
        )
    }
}

export default Events;