import React from 'react';
import CardItem from './card-item';
import image1 from './images/FieryBirdnew1.png';
import image2 from './images/live.jpg';
import image3 from './images/culture.png';
import image4 from './images/mic.jpg'
import { motion } from "framer-motion";

let array = [
    `The Fiery Bird is a community arts and live music venue in the heart of Woking. A live music venue and Community focused arts and cultural centre for all to participate in and enjoy.
    Opened in May 2018, run by the Phoenix Cultural Centre CIC, the venue hosts live music gigs, workshops, mentoring, training, arts events, as well as many other projects and events to benefit the community.`,
    `We have a vibrant music scene hosting a range of genres, from rock to indie to cheesy karaoke nights, we support a diverse group of bands and provide something for everyone.`,
    `We are very excited to hear that we have been awarded Government funding thanks to the DCMS (Digital, Culture, Media and Sport Committee) Culture Recovery Fund this means we can continue to write campaigns and fund bids and get ready to make an amazing space for our Woking community to enjoy next year.
    `,
    `We host monthly open mic nights which are enjoyed among a diverse range of ages.  Come along to our next one to see what it's all about!`
]
class Cards extends React.Component {
    render() {
        return (
            <motion.div 
            key="home-key"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.5},
            }}
            >
            <React.Fragment>
                <div class="w-full cards px-20">
                    <CardItem 
                    title={"Who We Are"}
                    image={image1} 
                    text={String(array[0])} />
                    <CardItem 
                    image={image3}
                    title={"#HereForCulture"}
                    text={String(array[2])} />
                    <CardItem 
                    image={image2} 
                    title={"Regular Live Music"}
                    text={String(array[1])} />
                    
                     <CardItem 
                    image={image4}
                    title={"Monthly Open Mic Nights"}
                    text={String(array[3])} />

                </div>
            </React.Fragment>
            </motion.div>
        )
    }
}

export default Cards;