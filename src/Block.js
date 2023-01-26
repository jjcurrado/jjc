import './Block.css'
import React, { useState } from 'react';


function Block() {
    const [isCollapsed, setCollapsed] = useState(true);
    
    function handleExpand()
    {
        setCollapsed(!isCollapsed)
    }
    if(isCollapsed)
        // {...}
        return <button className='collapsed-block' onClick={handleExpand}>
            &#123;...&#125; 
        </button>

    return (
        <>Hello World!</>
    )

    
}

export default Block;