import React, {Component} from 'react';
import {Card, Dimmer, Header, Icon, Image, Loader, Label} from "semantic-ui-react";
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
                                    <Card.Content header>
                                        <Header as='h2'>
                                            <Image size='mini' src={p.imgsrc} onLoad={this.handleImageLoad.bind(this)}/>
                                            <Header.Content>{p.title}
                                                <Header.Subheader>{p.institute}</Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                        <Label size={'tiny'} color='blue'>
                                            <Icon name='calendar alternate'/>
                                            {p.timeRange}
                                        </Label>
                                        <Label size={'tiny'} color='red'>
                                            <Icon name='location arrow'/>
                                            {p.location}
                                        </Label>
                                    </Card.Content>
                                    <Card.Content>
                                            <Card.Description>
                                                <ul>
                                                    {
                                                        p.relSkill.map(s =>
                                                            <li>{s}</li>
                                                        )
                                                    }
                                                </ul>
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