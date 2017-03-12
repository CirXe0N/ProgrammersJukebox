import React, { Component } from 'react';
import SectionNavBar from './SectionNavBar';
import SectionFooter from './SectionFooter';
import SectionTabs from './SectionTabs';
import ContentPage from './ContentPage';
import AudioPlayer from '../audio-player/AudioPlayer';
import '../../../node_modules/foundation-sites/dist/css/foundation.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import '../../stylesheets/main.css';
import {SOUNDCLOUD_PLAYLIST} from "../../config";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedTab: 'HOUSE',
        selectedPlaylist: SOUNDCLOUD_PLAYLIST['HOUSE']
    };
  }

  handleTab(tabName) {
    this.setState({
        selectedTab: tabName,
        selectedPlaylist: SOUNDCLOUD_PLAYLIST[tabName]
    });
  }

  render() {
    return (
      <main>
        <SectionNavBar/>
        <div className="row columns">
          <SectionTabs tabName={this.state.selectedTab} onSelectTab={(tabName) => this.handleTab(tabName)} />
        </div>
        <div className="row columns">
          <ContentPage tabName={this.state.selectedTab}/>
        </div>
        <div className="row columns">
          <AudioPlayer playlistURL={this.state.selectedPlaylist}/>
        </div>
        <SectionFooter/>
      </main>
    );
  }
}
