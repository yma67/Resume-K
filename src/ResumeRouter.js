import React from 'react';
import {General} from "./component/resume";
import { Switch, Route, Redirect } from 'react-router-dom'
import Project from "./component/project";
import ProjectViewAdapter from "./component/ProjectViewAdapter";
import work from "./component/work";
import Resume from "./component/resume";
import ProjectRouter from "./ProjectRouter";
let ResumeRouter = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/resume' component={Resume}/>
                <Route path={'/project'} component={ProjectRouter}/>
                <Route path={'/workexp'} component={work}/>
            </Switch>
        </main>
    );
};
export default ResumeRouter;