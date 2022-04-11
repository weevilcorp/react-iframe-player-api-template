import React, {useEffect} from 'react';
import './App.css';

function App() {
  function onPlayerReady(event) {
    console.log(event);
    console.log(JSON.stringify(event.target));
  }

  function onPlayerStateChange(event) {
  }

  useEffect(() => {    
    var div = document.createElement("div");
    div.setAttribute("id", "player");
    var videos = document.getElementById("videos");
    videos.prepend(div);

    new window.YT.Player("player", {
      height: '390',
      width: '640',
      videoId: "H5hYLC4_F9w",
      playerVars: {
        //autoplay: 1,
        'picture-in-picture': 1,
        'playsinline': 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, []);

  return (
    <>
      <div id="videos"></div>
    </>
  );
}

export default App;
