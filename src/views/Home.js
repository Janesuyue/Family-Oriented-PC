import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import Banner from '../components/Banner/Banner';

export default class Home extends Component{
    render(){
        return(
            <div>
                <Banner/>
            </div>
        )
    }
}