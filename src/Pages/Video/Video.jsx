import React from 'react';
import PlayVideo from '../../components/PlayVideo/PlayVideo';
import Recommonded from '../../components/Recommonded/Recommonded';
import { useParams } from 'react-router-dom';

const Video = () => {

  const {videoId , categoryId} = useParams();

  return (
    <div className='play-container flex justify-between bg-white p-4'>
      <div className="w-2/3 pr-4">
        <PlayVideo videoId={videoId} />
      </div>
      <div className="w-1/3 mt-12 bg-gray-100">
        <Recommonded />
      </div>
    </div>
  );
};

export default Video;
