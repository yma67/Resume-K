import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
import sml from "./sml.png";
import {Link} from "react-router-dom";
import ResumeRouter from "../ResumeRouter";
import ProjectRouter from "../ProjectRouter";

export default class Simalian extends Component{
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
                    <img src={sml} className="App-logo" alt="logo" />
                    <br />
                    <br />
                    <p>
                        {favoratesOfKing[rand(0, favoratesOfKing.length - 1)]}
                    </p>
                    <br />
                    <Button as={Link} inverted color={'black'} to={'/resume'}><code>bossli.io</code></Button>
                    <ProjectRouter/>
                </header>
            </div>
        );
    }
}