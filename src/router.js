import React from 'react';
import Simalian from "./component/simalian";
import { Switch, Route, Redirect } from 'react-router-dom'
import {General} from "./component/resume";
import {CSSTransition, TransitionGroup} from "react-transition-group"
import ProjectViewAdapter from "./component/ProjectViewAdapter";
let Router = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Simalian}/>
                <Route exact path='/resume' component={General}/>
                <Route exact path='/project' component={General}/>
                <Route exact path='/project/:number' component={General}/>
                <Route exact path='/workexp' component={General}/>
            </Switch>
        </main>
    );
};
export default Router;