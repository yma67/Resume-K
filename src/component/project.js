import React, {Component} from 'react';
import {Menu, Card, Header, Icon, Label, Divider, Button} from 'semantic-ui-react';
import hand from "./hand.png";
import SingleProject from '../model/SingleProject'
import {Link} from "react-router-dom";
export default class Project extends Component {

    state = { activeItem: 'Project' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return(
            <div>
                <br />
                <Header as='h3'>
                    <Icon name='chess king' />
                    <Header.Content>King of Following Groups</Header.Content>
                </Header>
                <br />
                <Card.Group>
                    {
                        SingleProject.all().map(p => (
                            <Card key={p.number} image={p.imgsrc} as={Link} color='red' header={p.name} meta={p.dateRange} description={p.description} ui disabled loader to={`/project/${p.number}`}>
                            </Card>
                        ))
                    }
                </Card.Group>
            </div>
        );
    }
}