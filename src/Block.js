import './Block.css'
import React, { useState } from 'react';


function Block(props) {
    const [isCollapsed, setCollapsed] = useState(true);
    
    function handleExpand() {
        setCollapsed(!isCollapsed)
    }

    if (isCollapsed)
        // {...}
        return <button className='collapsed-block' onClick={handleExpand}>
            &#123;...&#125;
        </button>

    return (
        <div className='block-body'>
            &#123;
            {
                Object.keys(props.content).map((key) => (
                    <div className='key-val'>
                        <span className='obj-key'>"{key}"</span> : <span className='obj-val'>"{props.content[key]}",</span>
                    </div>
                ))
            }
            &#125;
        </div>
    )

    
}

export default Block;