import React, { Component } from 'react';
import ButtonPlay from './ButtonPlay';

let soundcloud = require('soundcloud');


export default class AudioPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: null
        };

        // this.initSoundCloudPlayer()
    }

    initSoundCloudPlayer() {
        soundcloud.initialize({
            client_id: ''
        });

        soundcloud.resolve('https://soundcloud.com/louis-v-d-linden/sets/house')
            .then((playlist) => this.playlist = playlist);

        this.loadPlaylist();
    }

    loadPlaylist() {
        this.player = soundcloud.stream('/tracks/232').then((player) => {
            player.options.protocols = ['http', 'rtmp'];
            this.setState({player: player});
        });


        // console.log(this.state);
        // soundcloud.stream('/tracks/' + this.playlist.tracks[0].id).then(function(player){
        //     player.options.protocols = ['http', 'rtmp'];
        //     player.play();
        // });
    }

    render() {
        return (
            <div className="audio-player">
                <div className="media-object">
                    <div className="media-object-section">
                        <div className="thumbnail">
                            <img src={require("../../images/track-placeholder.jpg")} alt=""/>
                        </div>
                    </div>
                    <div className="media-object-section">
                        <div className="track">
                            <div className="track-name"> Jesus Walks </div>
                            <div className="artist-name"> Kanye West </div>
                            <div className="track-time">
                                <span>  00:00  </span>
                                <span>  00:00  </span>
                            </div>
                        </div>
                        <div className="hr-line"/>
                        <div className="controls">
                            <div className="previous-item-button"> <i className="fa fa-backward" aria-hidden="true"></i> </div>
                            <ButtonPlay player={this.state.player}/>
                            <div className="next-item-button"> <i className="fa fa-forward" aria-hidden="true"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
