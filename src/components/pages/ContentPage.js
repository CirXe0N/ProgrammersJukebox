import React, { Component } from 'react';

export default class ContentPage extends Component {
  render() {
    return (
      <div className="page-title"> &lt;{this.props.tabName}/&gt; </div>
    )
  }
}
