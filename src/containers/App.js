import React , {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor(props)
    { 
        super(props)
        this.searchChange = this.searchChange.bind(this);
        this.state = {
            robots : [] ,
            searchField : ''
        }; 
    }  
    searchChange  = (event) => {
        this.setState({searchField:event.target.value})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()).then(users => this.setState({robots : users}))
    }
    render() {
        const {robots ,searchField} = this.state
        const filtered = robots.filter((user) => user.name.toLowerCase().includes(searchField.toLowerCase()))
         return (!robots.length)?
           ( <h1 className="tc f1">Loading....</h1>):(
             <div className='tc '>
                <h1 className='tc f1'>Robofriends</h1>
                <SearchBox  searchChange={this.searchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filtered}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
};

export default App;
