import React, {Component} from 'react'
import SignleProject from '../model/SingleProject'
import {Dimmer, Divider, Grid, Header, Icon, Loader, Menu, Placeholder, Segment} from "semantic-ui-react";
import {Label, Button} from "semantic-ui-react";
import ReactMarkdown from 'react-markdown'
import {Link} from "react-router-dom";
class ProjectViewAdapter extends Component {
    constructor(props) {
        super(props);
        this.project = SignleProject.get(
            parseInt(this.props.match.params.number, 10)
        );
        this.state = {load: true};
    }

    componentDidMount() {
        if (this.project) {
            fetch(this.project.rdme)
                .then((res) => res.text())
                .then((md) => {
                    this.setState({ terms: md,load: false })
                })
        }
    }
    render() {
        if (!this.project) {
            return (
                <div>
                    <h1>
                        Sorry, Project Not Found...
                    </h1>
                </div>
            )
        } else {
            return (
                <div>
                    <br />
                    <h1>
                        {this.project.name}
                            <Button as={Link} floated='right' color={'red'} to={'/project'}>Back</Button>
                    </h1>
                    <h4>
                        {this.project.dateRange}
                    </h4>
                    <br />
                    <Grid columns={1}>
                        <Grid.Column>
                            <Segment raised>
                                <Label as='a' color='blue' href={this.project.github} ribbon>
                                    <code>GitHub <Icon name={'github'}/></code>
                                </Label>
                                <br />
                                <br />
                                <Label as='a' color='red' ribbon>
                                    <code>README.md</code>
                                </Label>
                                <div className="Readme-content">
                                    <Dimmer active={this.state.load} inverted>
                                        <Loader inverted>Loading</Loader>
                                    </Dimmer>
                                    <ReactMarkdown source={this.state.terms} />
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>
            );
        }

    }
}

export default ProjectViewAdapter