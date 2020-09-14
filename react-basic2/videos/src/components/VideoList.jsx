import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderdeList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{renderdeList}</div>;
};

export default VideoList;
