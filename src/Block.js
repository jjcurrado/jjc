import './Block.css'
import React, { useState } from 'react';
import FadeIn from 'react-fade-in';


function Block(props) {

    const [isCollapsed, setCollapsed] = useState(true); 
    var open = '{';
    var close = '}';
    var blockBracketClass = 'block-body bracket'; 

    if (props.type === "array")
    {
        open = '[';
        close = ']';
        blockBracketClass += " array";
    }

    // {...}, [...]
    var collapsed = open + "..." + close;

    // open and close objects
    function handleExpand() {
        setCollapsed(!isCollapsed)
    }

    if (isCollapsed)
        //  display {...}, [...]
        return <button className={"collapsed-block " + props.size} onClick={handleExpand}>
            <FadeIn>{collapsed}</FadeIn>
        </button>

    var delay = 400; //fade in animation time in ms
    var body;

    if (props.type === "array") {
        body = props.content.slice(0, props.content.length - 1).map((entry) => (
            <span className='obj-val'>{entry},</span>
        ))
        // last object has no trailing comma (find a prettier way to do this?)
        var len = props.content.length;
        var lastObject = props.content[len - 1];

        console.log(blockBracketClass)
        body.push(
            <span className='obj-val'>{lastObject}</span>
        )
    }
    else {
        body = props.content.slice(0, props.content.length - 1).map((entry) => (
            <div className='key-val'>
                <span className='obj-key'>"{Object.keys(entry)[0]}"</span> : <span className='obj-val'>{entry[Object.keys(entry)]}</span>,
            </div>
        ))

        // last object has no trailing comma (find a prettier way to do this?)
        var len = props.content.length;
        var lastObject = props.content[len - 1];

        body.push(
            <div className='key-val'>
                <span className='obj-key'>"{Object.keys(lastObject)[0]}"</span> : <span className='obj-val'>{lastObject[Object.keys(lastObject)[0]]}</span>
            </div>
        )
    }

    return (
        <div className='block-body'>
                <button className={blockBracketClass} onClick={handleExpand}>{open}</button>
                <FadeIn delay={delay} wrapperTag='span' childTag='span' className='fade-wrapper'>
                    {body}
                </FadeIn>
            <button className={blockBracketClass} onClick={handleExpand}>{close}</button>
        </div>
    );
}

export default Block;