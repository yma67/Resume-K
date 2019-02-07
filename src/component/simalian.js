import React, {Component} from 'react';
import {Button, Dimmer, Header, Icon} from 'semantic-ui-react'
import sml from "./sml.png";
import {Link} from "react-router-dom";
import ProjectRouter from "../ProjectRouter";

export default class Simalian extends Component{
    state = { load: true };
    handleImageLoad() {
        this.setState({load: false});
    }
    render() {
        let favoratesOfKing = ['村头烧烤', '可不敢', '太毒了', '稳啊', '高科技', '脸神', '闹呢'];
        let rand = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        return(
            <div className="App">
                <header className="App-header">
                    <Dimmer active={this.state.load} page>
                        <Header as='h2' icon inverted>
                            <Icon name='smile' />
                            川剧变脸
                            <Header.Subheader>组皇职业照</Header.Subheader>
                        </Header>
                    </Dimmer>
                    <img src={sml} className="App-logo" alt="logo" onLoad={this.handleImageLoad.bind(this)} />
                    <br />
                    <br />
                    <Header as='h1' icon centered inverted>
                        {favoratesOfKing[rand(0, favoratesOfKing.length - 1)]}
                    </Header>
                    <br />
                    <Button as={Link} centered inverted color={'black'} to={'/resume'}><code>bossli.io</code></Button>
                    <ProjectRouter/>
                </header>
            </div>
        );
    }
}