import React, {Component} from 'react';
import Education from '../model/Education'
import Hobby from '../model/Hobby'
import {Menu, Card, Header, Icon, Image, Label, Divider} from 'semantic-ui-react';
import McGillIcon from './McGill_University_CoA.svg'
import hand from "./hand.png";
export default class Resume extends Component {
    state = { activeItem: 'Chris Li' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <div className="Resume-header">
                <header>
                    <Menu secondary>
                        <Menu.Item
                            name='Chris Li'
                            color='red'
                            active={activeItem === 'Chris Li'}
                            href={'/resume'}
                            onClick={this.handleItemClick}>
                        </Menu.Item>

                        <Menu.Item
                            name='Project'
                            active={activeItem === 'Project'}
                            color='red'
                            href={'/project'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Work Experience'
                            active={activeItem === 'Work Experience'}
                            color='red'
                            href={'/workexp'}
                            onClick={this.handleItemClick}
                        />
                        <div className="right menu Resume-Label">
                            <Label as={'a'} color={'red'} href={'/'} image>
                                <img src={hand} />
                                川剧变脸
                            </Label>
                        </div>
                    </Menu>



                </ header>
                <br />
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
                    {
                        Hobby.all().map(p => (
                            <Card key={p.hid} image={p.imgsrc} header={p.title} meta={p.meta} description={p.description} color='yellow'>
                            </Card>
                        ))
                    }
                </Card.Group>
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