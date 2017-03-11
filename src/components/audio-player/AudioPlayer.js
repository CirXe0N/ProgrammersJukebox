import React, { Component } from 'react';
import ButtonPlay from './ButtonPlay';
import ButtonNextItem from './ButtonNextItem';
import ButtonPreviousItem from './ButtonPreviousItem';
import {SOUNDCLOUD_CLIENT_ID} from "../../config";
import {Utilities} from "../../utilities/Utilities";

let soundcloud = require('soundcloud');


export default class AudioPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: null,
            playlistURL: this.props.playlistURL,
            playlist: null,
            currentTrackPosition: -1,
            currentTrack: null,
            currentPlaybackTime: '00:00',
            isPlaying: false
        };

        this.initSoundCloudPlayer()
    }

    initSoundCloudPlayer() {
        soundcloud.initialize({
            client_id: SOUNDCLOUD_CLIENT_ID
        });

        soundcloud.resolve(this.state.playlistURL)
            .then((playlist) => {
                playlist.tracks = Utilities.randomizePlaylistTracks(playlist.tracks);
                this.setState({playlist: playlist});
                this.nextTrack();
        })
    }

    previousTrack() {
        let previousTrackPosition = this.state.currentTrackPosition - 1;

        if(previousTrackPosition < 0) {
            previousTrackPosition = this.state.playlist.tracks.length - 1;
        }

        this.setState({
            currentTrackPosition: previousTrackPosition,
            currentTrack: this.state.playlist.tracks[previousTrackPosition],
            currentPlaybackTime: '00:00'
        });

        this.createPlayer(this.state.playlist.tracks[previousTrackPosition].id);
    }

    nextTrack() {
        let nextTrackPosition = this.state.currentTrackPosition + 1;

        if(nextTrackPosition >= this.state.playlist.tracks.length) {
            nextTrackPosition = 0;
        }

        this.setState({
            currentTrackPosition: nextTrackPosition,
            currentTrack: this.state.playlist.tracks[nextTrackPosition],
            currentPlaybackTime: '00:00'
        });

        this.createPlayer(this.state.playlist.tracks[nextTrackPosition].id);
    }

    playTrack() {
        this.state.player.play();
        this.setState({isPlaying: true});
    }

    pauseTrack() {
        this.state.player.pause();
        this.setState({isPlaying: false});
    }

    createPlayer(trackId) {
        soundcloud.stream('/tracks/' + trackId)
            .then((player) => {
                player.options.protocols = ['http', 'rtmp'];
                player.on('time', () => this.updatePlaybackTime());
                player.on('finish', () => this.nextTrack());

                this.setState({player: player});

                if(this.state.isPlaying) {
                    this.playTrack();
                }
            });
    }

    updatePlaybackTime() {
        let time = AudioPlayer.formatTime(this.state.player.currentTime() / 1000);
        this.setState({currentPlaybackTime: time});
    }

    render() {
        let thumbnail = require("../../images/track-placeholder.jpg");
        if(this.state.currentTrack && this.state.currentTrack.artwork_url) {
            thumbnail = this.state.currentTrack.artwork_url;
        }

        let duration = '00:00';
        if(this.state.currentTrack && this.state.currentTrack.duration) {
            duration = Utilities.formatTime(this.state.currentTrack.duration / 1000);
        }

        let title = '--';
        if(this.state.currentTrack && this.state.currentTrack.title) {
            title = this.state.currentTrack.title;
        }

        let artist = '--';
        if(this.state.currentTrack && this.state.currentTrack.user.username) {
            artist = this.state.currentTrack.user.username;
        }

        return (
            <div className="audio-player">
                <div className="media-object">
                    <div className="media-object-section">
                        <div className="thumbnail">
                            <img src={thumbnail} alt=""/>
                        </div>
                    </div>
                    <div className="media-object-section">
                        <div className="track">
                            <div className="track-name" title={title}> {title} </div>
                            <div className="artist-name" title={artist}> {artist}</div>
                            <div className="track-time">
                                <span> {this.state.currentPlaybackTime} </span>
                                <span> {duration} </span>
                            </div>
                        </div>
                        <div className="hr-line"/>
                        <div className="controls">
                            <ButtonPreviousItem onPreviousTrack={() => this.previousTrack()}/>
                            <ButtonPlay onPlay={() => this.playTrack()} onPause={() => this.pauseTrack()} isPlaying={this.state.isPlaying} />
                            <ButtonNextItem onNextTrack={() => this.nextTrack()}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
