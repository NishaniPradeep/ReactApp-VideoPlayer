import React from "react";

const VideoListItem = ({ video }) => {
  // Above paramter {video} will be translated into below line
  // const video = props.video;
  
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} alt="broken" />
        </div>
        <div className="media-body">
          <div className="media-heading" />{video.snippet.title}
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
