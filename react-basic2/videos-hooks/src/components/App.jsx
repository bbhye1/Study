import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedvideo] = useState(null);

  useEffect(() => {
    onSearchSubmit("cat");
  }, []);

  const onSearchSubmit = async (term) => {
    const response = await youtube.get("./search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedvideo(response.data.items[0])
  };

  const onVideoSelect = (video) => {
    setSelectedvideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
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
