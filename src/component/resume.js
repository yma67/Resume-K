import React, {Component} from 'react';
import Education from '../model/Education'
import Hobby from '../model/Hobby'
import {Menu, Card, Header, Icon, Image, Divider, Loader, Dimmer} from 'semantic-ui-react';
import McGillIcon from './McGill_University_CoA.svg'
import hand from './hand.png'
import {Link} from "react-router-dom";
import ProjectRouter from "../ProjectRouter";
import ResumeRouter from "../ResumeRouter";
import SignleProject from "../model/SingleProject";
export class General extends Component {

    constructor(props) {
        super(props);
        var urlPrev = this.props.location.pathname.slice(1);
        var prim = "";
        for (var i = 0; i < urlPrev.length; i = i + 1) {
            if (urlPrev.charAt(i) === '/') break;
            prim = prim + urlPrev.charAt(i);
        }
        if (prim === 'resume') {
            this.state = { activeItem: 'Chris Li'};
        } else if (prim === 'project') {
            this.state = { activeItem: 'Project'};
        } else {
            this.state = { activeItem: 'Work Experience'};
        }
    }
    handleItemClick = (e, { name }) => this.setState(name);

    getTab = () => {
        let urlPrev = this.props.location.pathname.slice(1);
        let prim = "";
        for (let i = 0; i < urlPrev.length; i = i + 1) {
            if (urlPrev.charAt(i) === '/') break;
            prim = prim + urlPrev.charAt(i);
        }
        if (prim === 'resume') {
            return 'Chris Li';
        } else if (prim === 'project') {
            return 'Project'
        } else {
            return 'Work Experience'
        }
    };
    state = { activeItem: this.getTab };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return (
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
                            active={activeItem === 'Chris Li'}
                            as={Link}
                            to='/resume'
                            onClick={this.handleItemClick}>
                        </Menu.Item>

                        <Menu.Item
                            name='Project'
                            active={activeItem === 'Project'}
                            color='red'
                            as={Link}
                            to='/project'
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Work Experience'
                            active={activeItem === 'Work Experience'}
                            color='red'
                            as={Link}
                            to='/workexp'
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </ header>
                <ResumeRouter />
                <div className={'Resume-Footer'}>
                    <Divider horizontal footer className={'Resume-Footer'}>
                        <Header as='h4' >
                            <code><Icon name='heart' color={'red'} />yma67 @t09</code>
                        </Header>
                    </Divider>
                </div>
            </div>
        );
    }
}
export default class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {load: true};
    }
    componentDidUpdate() {
        this.setState({load: false});
    }
    render() {
        return (
            <div>
                <br />
                <br />
                <div>
                    <Header as='h3'>
                        <Icon name='book' />
                        <Header.Content>Education</Header.Content>
                    </Header>
                    <br />
                    <Card.Group>
                        {
                            Education.all().map(p => (
                                <Card key={p.eid} color='red' fluid ui disabled loader>
                                    <Card.Content>
                                        <Image floated='right' size='mini' src={McGillIcon} />
                                        <Card.Header>{p.degree}</Card.Header>
                                        <Card.Meta>{p.institute}</Card.Meta>
                                        <Card.Description>
                                            <ul>
                                                <li>{p.grade}</li>
                                                <li>{p.award}</li>
                                                <li>{p.relCourse}</li>
                                            </ul>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            ))
                        }
                    </Card.Group>
                    <br />
                    <Header as='h3'>
                        <Icon name='heart' />
                        <Header.Content>Like</Header.Content>
                    </Header>
                    <Card.Group>
                        <Dimmer active={this.state.load} inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>
                        {
                            Hobby.all().map(p => (
                                <Card key={p.hid} href={p.knowledgeSrc} image={p.imgsrc} header={p.title} meta={p.meta} description={p.description} color='yellow'>
                                </Card>
                            ))
                        }
                    </Card.Group>
                </div>
                </div>

        );
    }
}