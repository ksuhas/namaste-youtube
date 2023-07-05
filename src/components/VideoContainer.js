import React, { useEffect, useState } from 'react'
import VideoCard, { AdVideoCard } from './VideoCard'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
    return () => {
      window.removeEventListener('scroll', infiniteScroll, true);
    }
  }, [nextPageToken]);

  const getVideos = async () => {
    try {
      const url = nextPageToken !== "" ? `${YOUTUBE_VIDEO_API}&pageToken=${nextPageToken}` : YOUTUBE_VIDEO_API;
      const data = await fetch(url);
      const json = await data.json();
      setNextPageToken(json?.nextPageToken);
      setVideos([...videos, ...json?.items]);
    } catch (e) {
      console.error(e);
    }
  }

  const infiniteScroll = () => {
    if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300) {
      getVideos();
    }
  }

  if (!videos.length) return <Shimmer dummyDivlength={videos.length}/>

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
