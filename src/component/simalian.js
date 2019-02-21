import React, {Component} from 'react';
import {Button, Dimmer, Header, Icon} from 'semantic-ui-react'
import sml from "../img/sml.png";
import {Link} from "react-router-dom";
import ProjectRouter from "../ProjectRouter";
import lwf from "../img/lwfetlw.png"

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

export default class Simalian extends Component{
    constructor(props) {
        super(props);
        this.favoratesOfKing = ['Word是世界上使用人数最多的编译器 还是NLP', 'PPT是世界上使用人数最多的前端框架', 'Excel是世界上使用人数最多的数据库', '村头烧烤', '可不敢', '太毒了', '稳啊', '高科技', '脸神', '闹呢', '跟着学学', '写method', '笛哥', '笛王', '马校长', '新技术', '太强了', 'Gunter是SE最好的教授'];
        this.state = { load: true,  text: this.favoratesOfKing[this.rand(0, this.favoratesOfKing.length - 1)]};
    }
    // {this.state.text}
    // className="App-logo"
    // #B22222
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
                    <img src={sml} alt="logo" className="App-logo" onLoad={this.handleImageLoad.bind(this)} />
                    <br />
                    <br />
                    <Header as='h1' icon centered inverted onClick={this.handleRandomOnClick.bind(this)}>
                        {this.state.text}
                    </Header>
                    <Header as='h2' icon centered inverted>
                        热烈祝贺我们伟大的组皇去德国点片儿 <Emoji symbol="🎉"/>
                    </Header>
                    <br />
                    <Button as={Link} size={'huge'} centered inverted color={'standard'} to={'/resume'}><code>bossli.io</code></Button>
                    <ProjectRouter/>
                </header>
            </div>
        );
    }
}