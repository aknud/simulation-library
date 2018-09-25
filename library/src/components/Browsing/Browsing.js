import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from './../Nav/Nav';

class Browsing extends Component {
    render(){
        return (
            <div>
                <Nav />
            </div>
        )
    }
}

export default connect()(Browsing);