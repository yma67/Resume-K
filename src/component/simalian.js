import React, {Component} from 'react';
import {Button, Dimmer, Header, Icon} from 'semantic-ui-react'
import sml from "../img/sml.png";
import {Link} from "react-router-dom";
import ProjectRouter from "../ProjectRouter";

export default class Simalian extends Component{
    constructor(props) {
        super(props);
        this.favoratesOfKing = ['村头烧烤', '可不敢', '太毒了', '稳啊', '高科技', '脸神', '闹呢', '跟着学学', '写method', '笛哥', '笛王', '马校长', '新技术', '太强了', 'Gunter是SE最好的教授'];
        this.state = { load: true,  text: this.favoratesOfKing[this.rand(0, this.favoratesOfKing.length - 1)]};
    }
    handleImageLoad() {
        this.setState({load: false});
    }
    handleRandomOnClick() {
        this.setState({text: this.favoratesOfKing[this.rand(0, this.favoratesOfKing.length - 1)]});
    }
    rand = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    render() {

        return(
            <div className="App">
                <header className="App-header">
                    <Dimmer active={this.state.load} page>
                        <Header as='h1' icon inverted>
                            <Icon name='smile' />
                            川剧变脸
                            <Header.Subheader>组皇职业照</Header.Subheader>
                        </Header>
                    </Dimmer>
                    <img src={sml} className="App-logo" alt="logo" onLoad={this.handleImageLoad.bind(this)} />
                    <br />
                    <br />
                    <Header as='h1' icon centered inverted onClick={this.handleRandomOnClick.bind(this)}>
                        {this.state.text}
                    </Header>
                    <br />
                    <Button as={Link} size={'huge'} centered inverted color={'black'} to={'/resume'}><code>bossli.io</code></Button>
                    <ProjectRouter/>
                </header>
            </div>
        );
    }
}