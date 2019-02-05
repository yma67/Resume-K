import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Project from './component/project.js'
import ProjectViewAdapter from "./component/ProjectViewAdapter";
const ProjectRouter = () => (
    <Switch>
        <Route exact path='/project' component={Project}/>
        <Route path='/project/:number' component={ProjectViewAdapter}/>
    </Switch>
);

export default ProjectRouter