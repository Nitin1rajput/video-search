import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="videoPlayer"src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          <div>{video.snippet.title}</div>
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
