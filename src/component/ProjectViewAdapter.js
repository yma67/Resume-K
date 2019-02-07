import React, {Component} from 'react'
import SignleProject from '../model/SingleProject'
import {Dimmer, Grid, Header, Icon, Loader, Segment} from "semantic-ui-react";
import {Label, Button} from "semantic-ui-react";
import '../github-markdown.css'
import {Link} from "react-router-dom";
import Remarkable from 'remarkable'
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
        const md = new Remarkable();
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
                    <div className="Resume-Content">
                        <br />
                    <Header as='h2'>
                        <Icon name='tag' />
                        <Header.Content>{this.project.name}</Header.Content>
                    </Header>
                    <h5>
                        {this.project.dateRange}
                    </h5>
                    <br />
                    <Grid columns={1}>
                        <Grid.Column>
                            <Button as={Link} color={'red'} to={'/project'}>Back</Button>
                            <Button color='blue' href={this.project.github}>
                                <Icon name='github' /> GitHub
                            </Button>
                            <br />
                            <Segment raised>
                                <Label attached='top'>
                                    <code>README.md</code>
                                </Label>
                                <br />
                                <div className={'Readme-content'}>
                                    <Dimmer active={this.state.load} inverted>
                                        <Loader inverted>Loading</Loader>
                                    </Dimmer>
                                    <article>
                                        <div class={'markdown-body'} dangerouslySetInnerHTML={{__html: md.render(this.state.terms)}} />
                                    </article>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    </div>
            );
        }

    }
}

export default ProjectViewAdapter;