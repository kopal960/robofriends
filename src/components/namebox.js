import React ,{Component} from 'react';

class Namebox extends Component
{
    render(){
        return (
            <div >
                <input className= "pa3 ba b--green bg-lightest-blue" type='search'  placeholder = {`Your name here..`}  onChange={this.props.nameset} >
                </input>
            </div>
        )
    }
}

export default Namebox;