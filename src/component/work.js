import React, {Component} from 'react';
import {Card, Dimmer, Divider, Header, Icon, Image, Loader} from "semantic-ui-react";
import Work from "../model/Work";

export default class work extends Component {
    constructor(props) {
        super(props);
        this.state = {load: true}
    }
    handleImageLoad() {
        this.setState({load: false});
    }
    render() {
        return (
            <div className={'Resume-Content'}>
                <br />
                <Header as='h2'>
                    <Icon name='code' />
                    <Header.Content>Work Experience</Header.Content>
                </Header>
                <br />
                <br />
                <Dimmer.Dimmable as={Card.Group} blurring centered dimmed={this.state.load} >
                    <Dimmer active={this.state.load} inverted>
                        <Loader size='massive'>加载中</Loader>
                    </Dimmer>
                    <Card.Group centered>
                        {
                            Work.all().map(p => (
                                <Card key={p.wid} color='red' fluid ui disabled loader>
                                    <Card.Content>
                                        <Image floated='right' size='mini' onLoad={this.handleImageLoad.bind(this)} src={p.imgsrc} />
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
                </Dimmer.Dimmable>
                <br />
            </div>
        );
    }
}