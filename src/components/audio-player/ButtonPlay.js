import React, { Component } from 'react';

export default class ButtonPlay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false
        };
    }

    handleClick() {
        if (!this.state.playing) {
            this.props.player.play();
        } else {
            this.props.player.pause();
        }
    }

    render() {
        let buttonIcon;
        if (!this.state.playing) {
            buttonIcon = <i className="fa fa-play fa-fw" aria-hidden="true"></i>;
        } else {
            buttonIcon = <i className="fa fa-pause fa-fw" aria-hidden="true"></i>;
        }
        return (<div onClick={()=>this.handleClick()} className="play-button"> {buttonIcon} </div>);
    }
}