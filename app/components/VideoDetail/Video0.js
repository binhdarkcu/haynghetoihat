import VideoJs from 'react-videojs';
import React from 'react';
import ReactDOM from 'react-dom';

const VideoS = React.createClass({
    render() {
        return (
            <VideoJs src={[{ type: 'video/mp4', src: 'http://video-js.zencoder.com/oceans-clip.mp4' }]} />
        );
    }
});
ReactDOM.render(<VideoS />, document.querySelector('#videoContainer'));
