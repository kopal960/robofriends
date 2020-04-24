import React from 'react';

const Scroll = (props)=>{
    return (
        <div style={{overflowY :'scroll' ,height :'1000px' , border :'2px solid black' ,width: '100%' }}>
            {props.children}
        </div>
    )
}

export default Scroll;