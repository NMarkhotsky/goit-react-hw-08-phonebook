import React from 'react';
import videoBg from './videoBg.mp4';
import { Video } from './VideoBg.styled';

export const BackgroundVideo = () => {
  return (
    <div>
      <Video src={videoBg} autoPlay loop muted />
    </div>
  );
};
