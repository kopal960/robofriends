import React, {Component} from 'react';

class SearchBox extends Component 
{
    render(){
        return(
            <div >
                <input className= "pa3 ba b--green bg-lightest-blue" type='search'  placeholder = {`search Robots...`}  onChange={this.props.searchChange} >
                </input>
            </div>
        )
    }
}
export default SearchBox;