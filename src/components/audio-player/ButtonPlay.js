import React, { Component } from 'react';

let classNames = require('classnames');


export default class ButtonPlay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: this.props.isPlaying
        };
    }

    handleClick() {
        this.setState({isPlaying: !this.state.isPlaying});

        if (!this.state.isPlaying) {
            this.props.onPlay();
        } else {
            this.props.onPause();
        }
    }

    render() {
        return (
            <div onClick={()=>this.handleClick()} className={classNames("play-button", {"is-playing": this.state.isPlaying})}>
                <i className={classNames("fa fa-fw", {"fa-pause": this.state.isPlaying, "fa-play": !this.state.isPlaying })} aria-hidden="true"></i>
            </div>
        );
    }
}