import React from 'react';
import { motion } from "framer-motion";

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
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
                <div className="px-8 sm:px-20 mt-10">
                    <div className="w-full bg-white grid grid-cols-4 lg:grid-cols-7">
                        <div className="col-span-3 text-edit">
                            We Would Love To Hear From You
                        </div>
                        <div className="col-span-4 flex flex-col">
                            <div 
                            style={{marginTop: '20px'}}
                            className="grid grid-cols-4 border-top-e pt-8 pb-8">
                                <div className="col-span-2 md:col-span-1 pr-4 md:pr-0 text-edit-2 pl-2">
                                    Feel free to reach out if you are interested in using our venue, or to simply have a chat.
                                </div>
                                <div className="col-span-2 word-wrap col-start-3 text-edit-2 text-right pr-2 font-semibold">
                                info@fierybirdvenue.org.uk.
                                </div>
                            </div>
                            <div className="grid grid-cols-4 border-top-e pt-8 pb-8">
                                <div className="col-span-2 md:col-span-1 pr-4 md:pr-0 text-edit-2 pl-2">
                                The Fiery Bird, Albion House, 3 High St, Woking, Surrey, GU21 6BD
                                </div>
                                <div className="col-span-2 col-start-3 text-edit-2 text-right pr-2 font-semibold word-wrap">
                                https://www.facebook.com/Fierybirdlivemusicvenue/
                                </div>
                                
                            </div>
                        </div>
                       
                    </div>
                </div>
                </motion.div>
            </React.Fragment>
        )
    }
}

export default Contact;