import React, {Component} from 'react';
import {Card, Dimmer, Divider, Header, Icon, Image, Loader} from "semantic-ui-react";
import Work from "../model/Work";

export default class work extends Component {
    state = { activeItem: 'Work Experience' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return (
            <div>
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
            </div>
        );
    }
}