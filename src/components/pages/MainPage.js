import React, { Component } from 'react';
import SectionNavBar from './SectionNavBar';
import SectionFooter from './SectionFooter';
import SectionTabs from './SectionTabs';
import ContentPage from './ContentPage';
import AudioPlayer from '../audio-player/AudioPlayer';
import '../../../node_modules/foundation-sites/dist/css/foundation.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import '../../stylesheets/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'HOUSE'};
  }

  handleTab(tabName) {
    this.setState({selectedTab: tabName});
  }

  render() {
    return (
      <main>
        <SectionNavBar/>
        <div className="row columns">
          <SectionTabs tabName={this.state.selectedTab} onSelectTab={this.handleTab.bind(this)} />
        </div>
        <div className="row columns">
          <ContentPage tabName={this.state.selectedTab}/>
        </div>
        <div className="row columns">
          <AudioPlayer/>
        </div>
        <SectionFooter/>
      </main>
    );
  }
}

export default App;
