import React, {Component} from 'react'
import SignleProject from '../model/SingleProject'
import {Divider, Grid, Header, Icon, Menu, Segment} from "semantic-ui-react";
import {Label, Button} from "semantic-ui-react";
import ReactMarkdown from 'react-markdown'
import hand from "./hand.png";
class ProjectViewAdapter extends Component {
    constructor(props) {
        super(props);
        this.state = { terms: null };
        this.project = SignleProject.get(
            parseInt(this.props.match.params.number, 10)
        );
    }
    componentWillMount() {
        if (this.project) {
            fetch(this.project.rdme)
                .then((res) => res.text())
                .then((md) => {
                    this.setState({ terms: md })
                })
        }
    }
    render() {
        if (!this.project) {
            return (
                <div>
                    <div className="Resume-header">
                        <header>
                            <Menu secondary size={'small'}>
                                <Menu.Item
                                    href={'/'}
                                    active={false}
                                    inverted
                                    onClick={this.handleItemClick}
                                >
                                    <img src={hand} />
                                </Menu.Item>
                                <Menu.Item
                                    name='Chris Li'
                                    color='red'
                                    active={false}
                                    href={'/resume'}
                                >
                                </Menu.Item>

                                <Menu.Item
                                    name='Project'
                                    active={true}
                                    color='red'
                                    href={'/project'}
                                />
                                <Menu.Item
                                    name='Work Experience'
                                    active={false}
                                    color='red'
                                    href={'/workexp'}
                                />
                                <div className="right menu Resume-Label">
                                    <Button color='red' href='/project'>Back</Button>
                                </div>
                            </Menu>
                        </header>
                        <h1>
                            Sorry, Project Not Found...
                        </h1>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="Resume-header">
                        <header>
                            <Menu secondary>
                                <Menu.Item
                                    href={'/'}
                                    active={false}
                                    inverted
                                    onClick={this.handleItemClick}
                                >
                                    <img src={hand} />
                                </Menu.Item>
                                <Menu.Item
                                    name='Chris Li'
                                    color='red'
                                    active={false}
                                    href={'/resume'}
                                >
                                </Menu.Item>

                                <Menu.Item
                                    name='Project'
                                    active={true}
                                    color='red'
                                    href={'/project'}
                                />
                                <Menu.Item
                                    name='Work Experience'
                                    active={false}
                                    color='red'
                                    href={'/workexp'}
                                />
                                <Menu.Menu position='right'>
                                    <Menu.Item
                                        href={'/project'}>
                                        <Button color='red'>
                                            Back
                                        </Button>
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu>
                        </header>
                        <h1>
                            {this.project.name}
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
                                        <ReactMarkdown source={this.state.terms} />
                                    </div>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                        <div className={'Resume-Footer'}>
                            <Divider horizontal footer className={'Resume-Footer'}>
                                <Header as='h4' >
                                    <code><Icon name='heart' color={'red'} />yma67 @t09</code>
                                </Header>
                            </Divider>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default ProjectViewAdapter