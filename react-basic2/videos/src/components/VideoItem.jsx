import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video }) => {
  const getPublishTime = (video) => {
    const nowTime = new Date();
    const publishTime = new Date(video.snippet.publishTime);
    const betweenTime = Math.floor(
      (nowTime.getTime() - publishTime.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) return `${betweenTimeHour}분전`;

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) return `${betweenTimeHour}시간전`;

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 7) {
      return `${betweenTimeDay}일전`;
    } else if (betweenTimeDay < 28) {
      return `${Math.floor(betweenTimeDay / 4)}주전`;
    } else if (betweenTimeDay < 365) {
      return `${Math.floor(betweenTimeDay / 12)}달전`;
    } else {
      return `${Math.floor(betweenTimeDay / 365)}년전`;
    }
  };

  return (
    <div className="video-item item ">
      <img
        className="ui image"
        alt={video.snippet.description}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
        <div className="description">
          {video.snippet.channelTitle}
          {getPublishTime(video)}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
