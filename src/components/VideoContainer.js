import React, { useEffect, useState } from 'react'
import VideoCard, { AdVideoCard } from './VideoCard'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json?.items);
    } catch (e) {
      console.error(e);
    }
  }

  if (!videos?.length) return <Shimmer />

  return (
    <div className='flex flex-wrap justify-start'>
      {/* {videos[0] && <AdVideoCard videoInfo={videos[0]}/>} */}
      {videos?.map(video =>
        <Link key={video?.id} to={'/watch?v=' + video.id}><VideoCard videoInfo={video} /></Link>
      )}
    </div>
  )
}

export default VideoContainer;


// videos.length ? <VideoCard videoInfo={videos[0]} /> : null
