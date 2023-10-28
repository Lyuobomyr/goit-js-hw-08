import Vimeo from '@vimeo/player'
import throttle from 'lodash.throttle';
  
const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);
const STOR_KEY = "videoplayer-current-time";

function getSavedTime() {
  return localStorage.getItem(STOR_KEY);
}

const savedTime = getSavedTime();

if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(data => {
  const currentTime = data.seconds;
  localStorage.setItem(STOR_KEY, JSON.stringify(currentTime))
}, 1000));

