import React, {Component} from 'react'
import SignleProject from '../model/SingleProject'
import {Dimmer, Grid, Header, Icon, Loader, Placeholder, Segment} from "semantic-ui-react";
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
                        <br />
                    <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as='h2'>
                                        <Icon name='tag' />
                                        <Header.Content>{this.project.name}
                                            <Header.Subheader>{this.project.dateRange}</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Grid.Column>
                                <Grid.Column>
                                    <Button as={Link} color={'red'} to={'/project'} floated={'right'}>Back</Button>
                                    <Button color='blue' href={this.project.github} floated={'right'}>
                                        <Icon name='github' /> GitHub
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                </Grid.Column>
                            </Grid.Row>
                    </Grid>
                        <Segment raised>
                            <Label attached='top'>
                                <Icon name={'bookmark'}/>
                                <code>README.md</code>
                            </Label>
                            <br/>
                            <div className={'Readme-content'}>
                                <Dimmer active={this.state.load} inverted>
                                    <Loader inverted size={'massive'}>Loading</Loader>
                                </Dimmer>
                                <article>
                                    <div className={'markdown-body'}
                                         dangerouslySetInnerHTML={{__html: md.render(this.state.terms)}}/>
                                </article>
                            </div>
                        </Segment>
                    </div>
            );
        }

    }
}

export default ProjectViewAdapter;