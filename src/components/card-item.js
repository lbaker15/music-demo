import React from 'react';
import image1 from './images/FieryBirdnew1.png';
import {Link} from 'react-router-dom';

class CardItem extends React.Component {
    render() {
        const {image, text, title, date, larger, link} = this.props
        return (
            <React.Fragment>
                <div 
                key={date}
                className="card">
                    <div 
                    style={larger ? {minWidth: 470} : {}}
                    className="item">
                        {image && (
                            <div 
                            style={{backgroundImage: `url(${image})`}}
                            className="image"></div>
                        )}
                        
                        {text && (
                            <div 
                            style={larger ? {padding: '1.5rem 2.5rem', paddingBottom: '2.5rem'} : {}}
                            className="text">
                                {date && (
                                    <h5>{date}</h5>
                                )}
                                {!link ? (<h1>{title}</h1>) : (<h1><Link to={link}>{title}</Link></h1>)}
                                
                                {String(text).substring(0, 300)}
                                {String(text).length > 299 ? '...' : ''
                                } 
                            </div>
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardItem;