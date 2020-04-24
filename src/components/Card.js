import React from 'react';
import './Card.css';

class Card extends React.Component{
    render(){
        return(
                <div className="tc bg-light-green dib grow br3 ma2 pa3 bw2 shadow-5">
                    <img alt="profile" src= {`https://robohash.org/${this.props.id}?200x200`} />
                    <div className="bg-light-green">
                        <h2>
                            {this.props.name}
                        </h2>
                        throw 
                        <p>{this.props.email}</p>
                    </div>
                </div>
        )
    }
}

export default Card;