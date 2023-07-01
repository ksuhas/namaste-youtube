import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEO_WATCH_API, YOUTUBE_RECOMENDED_VIDEO_LIST_API } from '../utils/constants';
import { formatCompactNumber } from '../utils/helper';
import { Link } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import likeIcon from '../assets/icons/like.svg';
import disLikeIcon from '../assets/icons/dislike.svg';
import shareIcon from '../assets/icons/share.svg';
import downloadIcon from '../assets/icons/download.svg';
import moreIcon from '../assets/icons/more.svg';


const WatchVideo = () => {

    const [searchParams] = useSearchParams();
    const [video, setVideo] = useState({});
    const [relatedVideos, setRelatedVideos] = useState([]);

    let videoId = searchParams.get('v');
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
        getVideoDetails();
    }, [videoId]);

    const getVideoDetails = async () => {
        const data = await Promise.all([fetch(YOUTUBE_VIDEO_WATCH_API + videoId), fetch(YOUTUBE_RECOMENDED_VIDEO_LIST_API + videoId)]);
        const watchVideoJson = await data[0].json();
        const recVideoJson = await data[1].json();
        setVideo(watchVideoJson?.items[0]);
        setRelatedVideos(recVideoJson?.items);
    }

    return (
        <div className={`${!isMenuOpen ? 'px-20' : 'px-3'} col-span-11 pt-6 flex`}>
            <div className='flex-grow-9'>
                <div>
                    <iframe
                        width="900"
                        height="500"
                        src={"https://www.youtube.com/embed/" + videoId}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                    <div className='p-2 m-2'>
                        <div className='font-medium text-[18px]'>{video?.snippet?.title}</div>
                        <div className='mt-2 flex justify-between'>
                            <div className='flex'>
                                <div className='flex'>
                                    <img className='rounded-full w-10 h-10' alt='thumbnail' src={video?.snippet?.thumbnails?.default?.url} />
                                    <div className='flex flex-col justify-center ml-2'>
                                        <div className='font-bold text-[16px]'>{video?.snippet?.channelTitle}</div>
                                        <div className='text-gray-500 text-[12px]'>{formatCompactNumber(video?.statistics?.viewCount)} Subscriber</div>
                                    </div>
                                </div>
                                <button className='bg-black rounded-full px-4 ml-2 text-white'>Subscribe</button>
                            </div>
                            <div className='flex'>
                                <button className='bg-gray-100 rounded-l-full px-4 hover:bg-gray-200'><img alt='likeBtn' className='inline-block' src={likeIcon}/> 65K</button>
                                <button className='bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200'><img alt='dislikeBtn' className='inline-block' src={disLikeIcon}/></button>
                                <button className='bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200'><img alt='shareBtn' className='inline-block' src={shareIcon}/> Share</button>
                                <button className='bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200'><img alt='downloadBtn' className='inline-block' src={downloadIcon}/> Download</button>
                                <button className='bg-gray-100 rounded-full w-10 h-10 ml-2 hover:bg-gray-200'><img alt='moreBtn' className='inline-block' src={moreIcon}/></button>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 m-2'>
                        <CommentsContainer />
                    </div>
                </div>
            </div>
            <div className='flex-grow-1'>
                <div className='flex flex-col'>
                    {relatedVideos?.map(video =>
                        <Link key={video?.id?.videoId} to={'/watch?v=' + video?.id?.videoId}>
                            <div className='px-3 m-2 flex'>
                                <img className='rounded-xl w-[168px] h-[94px] ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} />
                                <ul className='flex flex-col justify-start ml-2 w-60'>
                                    <li className='font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{video?.snippet?.title}</li>
                                    <li className='text-gray-500 text-[12px]'>{video?.snippet?.channelTitle}</li>
                                    <li className='text-gray-500 text-[12px]'>100 views  {(Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)} days ago</li>
                                </ul>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WatchVideo;
