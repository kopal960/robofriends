import {CHANGE_SEARCHFIELD,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_FAILED,
        CHANGE_NAME} from  './constants';
        

const istateSearch = {
    searchField : '',
}

export const searchRobots = (state=istateSearch , action={})=>
{
    switch(action.type)
    {
        case CHANGE_SEARCHFIELD:
            return {...state, searchField:action.payload};
        default: 
            return state;
    }
}
const istateRobots = {
    robots: [],
    isPending: false,
    error:''
}
export const requestRobots = (state=istateRobots , action={}) =>
{
    switch(action.type)
    {
        case REQUEST_ROBOTS_PENDING:
            return {...state , isPending:true};
        case REQUEST_ROBOTS_FAILED:
            return {...state ,error:action.payload , isPending:false }   
        case REQUEST_ROBOTS_SUCCESS:
            return {...state ,robots:action.payload , isPending:false}
        default:
            return state; 
    }
}
const istatename = {
    name : ""
}
export const setname = (state=istatename , action={})=>
{
    if (action.type===CHANGE_NAME)
        return {...state , name:action.payload}
    else
        return state;
}