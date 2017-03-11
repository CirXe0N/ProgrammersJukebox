import React, { Component } from 'react';


export default class ButtonPreviousItem extends Component {
    render() {
        return (
            <div onClick={() => this.props.onPreviousTrack()} className="previous-item-button">
                <i className="fa fa-backward" aria-hidden="true"></i>
            </div>
        );
    }
}