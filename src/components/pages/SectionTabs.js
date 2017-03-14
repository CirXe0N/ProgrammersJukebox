import React, { Component } from 'react';

let classNames = require('classnames');

class SectionTabs extends Component {
  render() {
    return (
      <table className="tabs">
        <tbody>
          <tr>
            <td onClick={() => this.props.onSelectTab('HOUSE')} className={classNames({'selected': this.props.tabName === 'HOUSE'})}> HOUSE </td>
            <td onClick={() => this.props.onSelectTab('CHILL')} className={classNames({'selected': this.props.tabName === 'CHILL'})}> CHILL </td>
            <td onClick={() => this.props.onSelectTab('DEEP')} className={classNames({'selected': this.props.tabName === 'DEEP'})}> DEEP </td>
            <td onClick={() => this.props.onSelectTab('HIP HOP')} className={classNames({'selected': this.props.tabName === 'HIP HOP'})}> HIP HOP </td>
            <td onClick={() => this.props.onSelectTab('DUBSTEP')} className={classNames({'selected': this.props.tabName === 'DUBSTEP'})}> DUBSTEP </td>
            <td onClick={() => this.props.onSelectTab('TECH')} className={classNames({'selected': this.props.tabName === 'TECH'})}> TECH </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default SectionTabs;
