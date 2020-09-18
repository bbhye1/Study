import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from '../hooks/useVideo'

const App = () => {

  const [selectedVideo, setSelectedvideo] = useState(null);
  const [videos, search] = useVideo('cat');

  useEffect(() => {
    setSelectedvideo(videos[0])
  }, [videos]);


  const onVideoSelect = (video) => {
    setSelectedvideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
