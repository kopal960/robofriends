import React from 'react';
import Card from './Card';
import ErrorBoundry from './ErrorBoundry';

const CardList = ({robots}) => {
const arr = robots.map( ({name,id,email}) =>
 { 
return (
    <ErrorBoundry>
        <Card name={name} key={id} id={id} email={email} />
    </ErrorBoundry>
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
