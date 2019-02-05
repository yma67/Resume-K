import React, {Component} from 'react';
import {Menu, Card, Header, Icon, Label, Divider} from 'semantic-ui-react';
import hand from "./hand.png";
import SingleProject from '../model/SingleProject'
export default class Project extends Component {

    state = { activeItem: 'Project' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return(
            <div className="Resume-header">
                <header>
                    <Menu pointing secondary size={'massive'}>
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
                            <Label as={'a'} size='big' color={'red'} href={'/'} image>
                                <img src={hand} />
                                川剧变脸<Label.Detail>组皇职业照</Label.Detail>
                            </Label>
                        </div>
                    </Menu>
                        </header>
                <br />
                <Header as='h3'>
                    <Icon name='chess king' />
                    <Header.Content>King of Following Groups</Header.Content>
                </Header>
                <br />
                <Card.Group itemsPerRow={3}>
                    {
                        SingleProject.all().map(p => (
                            <Card key={p.number} image={p.imgsrc} color='red' header={p.name} meta={p.dateRange} description={p.description} ui disabled loader href={`/project/${p.number}`}>
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