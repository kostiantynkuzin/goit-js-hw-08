import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// const video = document.getElementById('vimeo-player');
const iframePlayer = new Player(iframe);
// console.log(video);

// iframePlayer.on('play', function () {
//   console.log('played the video!');
// });

const currentTimeOn = 'videoplayer-current-time';
iframePlayer.on('timeupdate', function (currentTime) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
});

// iframePlayer.setCurrentTime(currentTimeOn).then(function (100) {

// });
