import TrackPlayer from 'react-native-track-player';

module.exports = async function() {
  try {
    TrackPlayer.addEventListener('remote-play', async () => {
      await TrackPlayer.play();
    });

    TrackPlayer.addEventListener('remote-pause', async () => {
      await TrackPlayer.pause();
    });

    TrackPlayer.addEventListener('remote-next', async () => {
      await TrackPlayer.skipToNext();
    });

    TrackPlayer.addEventListener('remote-previous', async () => {
      await TrackPlayer.skipToPrevious();
    });

    TrackPlayer.addEventListener('remote-stop', async () => {
      await TrackPlayer.stop();
    });
  } catch (error) {
    console.error(error);
  }
};
