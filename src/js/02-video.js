import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const iframePlayer = new Vimeo.Player(iframe);

// iframePlayer.on('play', function () {
//   console.log('played the video!');
// });

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
