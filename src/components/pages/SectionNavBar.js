import React, { Component } from 'react';

export default class SectionNavBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="row columns">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="site-title">
                                The <span>Programmers'</span> Jukebox
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li className="creator">
                                CREATED BY <a href="http://www.cirx.io" target="_blank">CIRX SOFTWARE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
