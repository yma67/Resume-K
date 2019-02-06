import React, {Component} from 'react';
import {Button, Menu} from "semantic-ui-react";
import {Label} from "semantic-ui-react";
import hand from "./hand.png";
import {Card, Divider, Header, Icon, Image} from "semantic-ui-react";
import Work from "../model/Work";

export default class work extends Component {
    state = { activeItem: 'Work Experience' };
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
                    </Menu>
                </ header>
                <br />
                <Header as='h3'>
                    <Icon name='code' />
                    <Header.Content>Work Experience</Header.Content>
                </Header>
                <br />
                <Card.Group>
                    {
                        Work.all().map(p => (
                            <Card key={p.wid} color='red' fluid ui disabled loader>
                                <Card.Content>
                                    <Image floated='right' size='mini' src={p.imgsrc} />
                                    <Card.Header>{p.title}</Card.Header>
                                    <Card.Meta>{p.institute} {p.timeRange}</Card.Meta>
                                    <Card.Description>
                                        <Card.Description>
                                            <ul>
                                                {
                                                    p.relSkill.map(s =>
                                                        <li>{s}</li>
                                                    )
                                                }
                                            </ul>
                                        </Card.Description>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        ))
                    }
                </Card.Group>
                <br />
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