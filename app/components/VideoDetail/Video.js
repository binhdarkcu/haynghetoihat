import React from 'react';
import Video from 'react-videojs';

const ViewVideo = () =>
  <div className="videoContainer">
    <Video src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
  </div>;
export default ViewVideo;
