import React from 'react';
import {gsap} from 'gsap';
import NewsItem from './news-item';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import parse from 'html-react-parser';

const query = `
    {
        newsItemCollection {
          items {
              title,
              content {
                json
              },
              image {
                fileName,
                url
              },
             imageTestCollection {
              items {
                url
              }
            }
          } 
      }
    }
`

class News extends React.Component {
    state = {num: 0, open: false, item: {}, bg:'', news: []}
    ref = React.createRef()
    componentDidMount() {
        window.fetch('https://graphql.contentful.com/content/v1/spaces/t3lt13yhts4k/', {
            method: 'POST',
            body: JSON.stringify({ query }),
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer n2qOD4zE_f3yq57h1pVxRj1c5oEFLx6SHA-yCkDxtRM'
            }
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
            if (errors) {
                console.error(errors);
            }
            let {items} = data.newsItemCollection;
            
            Promise.all([items.map((item, i) => {
                let description = [];
                // console.log(item)
                let temp = {val: ''} 
                Promise.all([
                item.content.json.content.map((x, i) => {
                   let {value} = x;
                   let a = ( documentToReactComponents(x) )
                        
                   const checker = () => {
                        let a = ( documentToReactComponents(x) )
                        //NEED CONDITION FOR IF VAL LENGTH UNDER 200 BUT ON LAST LOOP/MAP
                        //MUST RETURN ITEM.SHORTCONTENT
                        if (temp.val.length < 200) {
                            let val = a.props.children[0];
                            temp = {...temp, val};
                            // if (temp.val.length > 200) {
                            item.shortcontent = temp;
                            // }
                        } else {
                            item.shortcontent = temp;
                        } 
                        // console.log('a', num, i)
                        // if (i === num) {
                        //     let val = a.props.children[0];
                        //     // console.log('val', val)
                        //     temp = {...temp, val};
                        //     console.log('temp', temp, i)
                        //     if (temp.val.length < 200) {
                        //         //CHECK FOR A.PROPS.CHILDREN 1 ETC
                        //         //FIRE WHEN I === 1
                        //         console.log('fired', temp)
                        //         num += 1
                        //         checker(num)
                        //     } else {
                        //         item.shortcontent = temp;
                        //     }
                        // }
                    }
                    checker()

                })
                ])
            })]).then(() => {
                this.setState({
                    news: data.newsItemCollection.items
                })
            })
        })

    }
    handleClick = (e) => {
        const {num, news} = this.state;
        if (e.target.value === 'next') {
            if (num < ((news.length-1) * 550)) {
                console.log('nect')
                this.setState((prev) => ({
                    num: prev.num + 550
                }))
                setTimeout(() => {
                    gsap.to(this.ref.current, {x: -this.state.num})
                }, 100)
            }
        } else {
            if (num > 0) {
                this.setState((prev) => ({
                    num: prev.num - 550
                }))
                setTimeout(() => {
                    gsap.to(this.ref.current, {x: -this.state.num})
                }, 100)
            }
        }
       
    }
    handleShow = (item, bg) => {
        if (item, bg) {
            this.setState((prev) => ({
                open: !prev.open,
                item: item,
                bg: bg
            }))
        } else {
            this.setState((prev) => ({
                open: !prev.open,
            }))
        }
    }
    render() {
        const {open, item, bg, news} = this.state;
        return (
            <React.Fragment>
                <div className="mx-20">
                <div className="flex justify-between items-end h-10">
                    <button 
                    onClick={this.handleClick}
                    value="prev"
                    className="btn">Previous</button>
                    <button 
                    onClick={this.handleClick}
                    value="next"
                    className="btn">Next</button>
                </div>
                {open && (
                    <div 
                    style={{overflowY: 'scroll'}}
                    className={"fixed h-screen left-0 top-0 z-10 ml-20 w-full-c min-h-550 h-auto p-10 n-item " + bg}>
                        <div
                        className="w-full flex justify-end move-up"
                        ><button 
                        onClick={this.handleShow}
                        className="close">X</button></div>
                        <h1 className="mb-2 text-center">{item.title}</h1>
                        {item.image !== null && (
                            <div
                            className="flex w-full justify-center mb-4"
                            ><img src={item.image.url} /></div>
                        )}
                        <h2 className="pb-4 text-center">Category</h2>
                        <h4 className="px-10">   
                        {documentToReactComponents(item.content.json)}  
                        </h4>
                    </div>
                )}
                <div className="mt-2 w-full overflow-hidden flex custom-color">
                    <div ref={this.ref} className="w-full flex">
                        {news.length > 0 &&
                        news.map((item, i) => {
                            let num = i + 1;
                            let bg = (num % 4 === 0) ? 'bg-orange' : (num % 4 === 1) ?  'bg-aqua' : (num % 4 === 2) ? 'bg-yellow2' : 'bg-purple'
                           
                           return <NewsItem key={i} item={item} bg={bg} i={i} handleShow={this.handleShow} />
                        })}

                        
                        
               
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default News;