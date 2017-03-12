import React, { Component } from 'react';

export default class SectionFooter extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row columns">
                    <div className="footer-icon">
                        <a href="http://www.cirx.io" target="_blank"> <i className="fa fa-globe fa-fw" aria-hidden="true"></i> </a>
                    </div>
                    <div className="footer-icon">
                        <a href="https://twitter.com/CirXe0N" target="_blank"> <i className="fa fa-twitter fa-fw" aria-hidden="true"></i> </a>
                    </div>
                    <div className="footer-icon">
                        <a href="mailto:hello@cirx.io" target="_blank"> <i className="fa fa-envelope fa-fw" aria-hidden="true"></i> </a>
                    </div>
                </div>
            </div>
        )
    }
}
