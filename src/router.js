import React from 'react';
import Simalian from "./component/simalian";
import Resume from "./component/resume";
import { Switch, Route, Redirect } from 'react-router-dom'
import ProjectRouter from "./ProjectRouter";
import work from "./component/work";
let Router = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Simalian}/>
                <Route path='/resume' component={Resume}/>
                <Route path={'/project'} component={ProjectRouter}/>
                <Route path={'/workexp'} component={work}/>
                <Redirect to="/404" />
            </Switch>
        </main>
    );
};
export default Router;