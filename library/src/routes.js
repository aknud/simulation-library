import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Browsing from './components/Browsing/Browsing';

export default (
    <Switch>
        <Route path='/auth' component={Auth}/>
        <Route path='/browse' component={Browsing} />
    </Switch>
)