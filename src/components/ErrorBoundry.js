import React, {Component} from 'react'

class ErrorBoundry extends Component {
   
    constructor(props)
    {
        super(props);
        this.state = {haserror :false};
    }

    componentDidCatch ( error, info)
    {
        this.setState ({haserror : true})
    }

    render ()
    {   
        if(this.state.haserror)
            return <h2>Something went wrong</h2>
        else
            return this.props.children
         
    }
}

export default ErrorBoundry;