var Headroom = require('headroom.js');
var jump = require('jump.js');

window.header = new Headroom(document.querySelector('.site-header'), {
  offset: window.visualViewport.clientHeight,
  classes : {
    initial : "site-header",
    pinned : "pinned",
    unpinned : "unpinned",
    top : "top",
    notTop : "not-top",
    bottom : "bottom",
    notBottom : "not-bottom"
  }
});

window.header.init();

document.addEventListener('DOMContentLoaded', () => {

  function onYouTubeIframeAPIReady() {
    let player;
    player = new YT.Player('lemonVideo', {
      videoId: 'd9TpRfDdyU0', // YouTube Video ID
      width: 1280,               // Player width (in px)
      height: 720,              // Player height (in px)
      playerVars: {
        autoplay: 1,        // Auto-play the video on load
        controls: 0,        // Show pause/play buttons in player
        showinfo: 0,        // Hide the video title
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 1,         // Hide video controls when playing
        playlist: 'd9TpRfDdyU0'
      },
      events: {
        onReady(e) {
          e.target.mute();
        }
      }
    });
  }

});

window.jump = jump;
