import React, {Component} from 'react';
import {Menu, Card, Header, Icon, Label, Divider, Button, Loader, Dimmer} from 'semantic-ui-react';
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
                        {
                            SingleProject.all().map(p => (
                                <Card key={p.number} image={p.imgsrc} as={Link} onLoad={this.handleImageLoad.bind(this)} color='red' header={p.name} meta={p.dateRange} description={p.description} ui disabled loader to={`/project/${p.number}`}>
                                </Card>
                            ))
                        }
                </Dimmer.Dimmable>
            </div>
        );
    }
}