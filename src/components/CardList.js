import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
const arr = robots.map( ({name,id,email}) =>
 { 
return (
        <Card name={name} key={id} id={id} email={email} />
    )
 }
 );
    return(
        <div>
            {arr}
        </div>
    )
}

export default CardList;
