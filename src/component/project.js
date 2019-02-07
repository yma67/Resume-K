import React, {Component} from 'react';
import {Menu, Card, Header, Icon, Label, Divider, Button, Loader, Dimmer, Image} from 'semantic-ui-react';
import hand from "./hand.png";
import SingleProject from '../model/SingleProject'
import {Link} from "react-router-dom";
export default class Project extends Component {

    state = { load: true };
    handleImageLoad() {
        this.setState({load: false});
    }
    render() {
        return(
            <div className={'Resume-Content'}>
                <br />
                <Header as='h2'>
                    <Icon name='chess king' />
                    <Header.Content>King of Following Groups</Header.Content>
                </Header>
                <br />
                <br />
                <Dimmer.Dimmable as={Card.Group} blurring centered dimmed={this.state.load} >
                    <Dimmer active={this.state.load} inverted>
                        <Loader size='massive'>加载中</Loader>
                    </Dimmer>
                    <Card.Group centered>
                        {
                            SingleProject.all().map(p => (
                                <Card key={p.number} as={Link} color='red' ui disabled loader to={`/project/${p.number}`}>
                                    <Image src={p.imgsrc} onLoad={this.handleImageLoad.bind(this)}/>
                                    <Card.Content>
                                        <Card.Header>
                                            {p.name}
                                        </Card.Header>
                                        <Card.Meta>
                                            {p.dateRange}
                                        </Card.Meta>
                                        <Card.Description>
                                            {p.description}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            ))
                        }
                    </Card.Group>
                </Dimmer.Dimmable>
            </div>
        );
    }
}