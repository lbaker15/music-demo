import React from 'react';
import parse from 'html-react-parser';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

class NewsItem extends React.Component {
    state = {
        open: false,
        content: ''
    }
    componentDidMount() {
        const {item, bg, i, handleShow} = this.props;
        let c = (String(item.shortcontent.props.children[0]).substring(0,200))
        this.setState({
            content: c
        })
        
    }

    render() {
        const {item, bg, i, handleShow} = this.props;
        // console.log(item)
        let num = i * 550;
        const {open, content} = this.state;
        return (
            <React.Fragment>
                <div className={"news-item py-10 " + bg}>
                    <h1 className="mb-2">{item.title}</h1>
                    <h2 className="pb-4">Category</h2>
                    <h4 className="px-10 root">   
                    {content}
                    </h4>
                    <h5 className="hidden">{}</h5>
                    <button 
                    onClick={() => handleShow(item, bg)}
                    className="btn text-center
                    w-full my-4">Read more</button>
                </div>
                
            </React.Fragment>
        )
    }
}

export default NewsItem;