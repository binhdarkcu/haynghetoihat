import React from 'react';
import Video from './Video';
import Tabs from './Tabs';
import TabContent from './TabContent';

const VideoDetail = () =>
    <section className="videoDetail">
        <div className="videoWrap">
            <Video />
            <Tabs />
        </div>
        <TabContent />
    </section>;
export default VideoDetail;
