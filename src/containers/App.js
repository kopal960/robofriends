import React , {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {connect} from 'react-redux';
import Namebox  from '../components/namebox';
import './App.css';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchfield,requestRobots ,setname } from '../actions';

const mapStateToProps = (state) =>{
    return {searchField: state.searchRobots.searchField,
            robots : state.requestRobots.robots,
            isPending: state.requestRobots.isPending,
            error:state.requestRobots.error,
            name: state.setname.name }
}
const mapDispatchToProps = (dispatch) =>{

    return {
        searchChange : (event) => dispatch(setSearchfield(event.target.value)),
        OnrequestRobots: () => dispatch(requestRobots()),
        nameset : (event) => dispatch(setname(event.target.value))
  }
}

class App extends Component {

    componentDidMount(){
            this.props.OnrequestRobots();
    }
    render() {
        const {searchField,searchChange ,robots, isPending,nameset ,name} = this.props;
        const filtered = robots.filter((user) => user.name.toLowerCase().includes(searchField.toLowerCase()));
         return (isPending)?
           ( <h1 className="robofont tc f1">Loading....</h1>):(
             <div className='tc '>
                <h1 className='robofont f1'>Robofriends</h1>
                <h4 className=' f2'>Welcome {name}!</h4>
                <div className="flex">
                    <Namebox  nameset = {nameset}/>
                    <SearchBox  searchChange={searchChange}/>
                </div>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filtered}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
