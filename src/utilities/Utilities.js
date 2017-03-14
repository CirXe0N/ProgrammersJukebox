
export class Utilities {
  static randomizePlaylistTracks(tracks) {
    for (let i = tracks.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = tracks[i];
      tracks[i] = tracks[randomIndex];
      tracks[randomIndex] = temp;

    }

    return tracks;
  }

  static formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    if (minutes < 10) {
      minutes = "0" + minutes
    }

    if (seconds < 10) {
      seconds = "0" + seconds
    }

    return minutes + ':' + seconds
  }
}
