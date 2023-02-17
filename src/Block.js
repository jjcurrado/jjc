import './Block.css'
import React, { useState } from 'react';


function Block(props) {
    const [isCollapsed, setCollapsed] = useState(true);

    if (props.blockChar === "square")
    {

    }

    
    function handleExpand() {
        setCollapsed(!isCollapsed)
    }

    if (isCollapsed)
        // {...}
        return <button className={"collapsed-block " + props.size} onClick={handleExpand}>
            &#123;...&#125;
        </button>

    return (
        <div className='block-body'>
            <button className='block-body bracket' onClick={handleExpand}>&#123;</button>
            {
                Object.keys(props.content).map((key) => (
                    <div className='key-val'>
                        <span className='obj-key'>"{key}"</span> : <span className='obj-val'>{props.content[key]},</span>
                    </div>
                ))
            }
            <button className='block-body bracket'>&#125;</button>
        </div>
    )

    
}

export default Block;