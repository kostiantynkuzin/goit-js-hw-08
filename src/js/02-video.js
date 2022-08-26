import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const iframePlayer = new Player(iframe);

// iframePlayer.on('play', function () {
//   console.log('played the video!');
// });

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(currentTime, seconds);
}

const currentTime = 'videoplayer-current-time';
iframePlayer.setCurrentTime(JSON.parse(localStorage.getItem(currentTime)) || 0);
