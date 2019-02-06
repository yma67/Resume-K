import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProjectViewAdapter from "./component/ProjectViewAdapter";
import Resume, {General} from "./component/resume";
import Project from "./component/project";
const ProjectRouter = () => (
    <Switch>
        <Route exact path='/project' component={Project} />
        <Route path={'/project/:number'} component={ProjectViewAdapter} />
    </Switch>
);

export default ProjectRouter