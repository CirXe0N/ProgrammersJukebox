import React, { Component } from 'react';

export default class ButtonNextItem extends Component {
  render() {
    return (
      <div onClick={() => this.props.onNextTrack()} className="next-item-button">
        <i className="fa fa-forward" aria-hidden="true"></i>
      </div>
    );
  }
}
