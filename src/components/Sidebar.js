import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import homeIcon from '../assets/icons/home.svg';
import shortsIcon from '../assets/icons/shorts.svg';
import subscriptionsIcon from '../assets/icons/subscriptions.svg';
import redLiveIcon from '../assets/icons/red-live.svg';

import libraryIcon from '../assets/icons/library.svg';
import historyIcon from '../assets/icons/history.svg';
import yourVideosIcon from '../assets/icons/yourVideos.svg';
import watchLaterIcon from '../assets/icons/watchLater.svg';
import likedVideosIcon from '../assets/icons/likedVideos.svg';
import showMoreIcon from '../assets/icons/showMore.svg';

import trendingIcon from '../assets/icons/trending.svg';
import shoppingIcon from '../assets/icons/shopping.svg';
import musicIcon from '../assets/icons/music.svg';
import moviesIcon from '../assets/icons/movies.svg';
import liveIcon from '../assets/icons/live.svg';
import gamingIcon from '../assets/icons/gaming.svg';
import newsIcon from '../assets/icons/news.svg';
import sportsIcon from '../assets/icons/sports.svg';
import learningIcon from '../assets/icons/learning.svg';
import fashionAndBeautyIcon from '../assets/icons/fashionAndBeauty.svg';

import ytPremiumIcon from '../assets/icons/yt-premium.svg';
import ytStudioIcon from '../assets/icons/yt-studio.svg';
import ytMusicIcon from '../assets/icons/yt-music.svg';
import ytKidsIcon from '../assets/icons/yt-kids.svg';

import settingsIcon from '../assets/icons/settings.svg';
import reportHistoryIcon from '../assets/icons/reportHistory.svg';
import helpIcon from '../assets/icons/help.svg';
import sendFeedbackIcon from '../assets/icons/sendFeedback.svg';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className='p-5 col-span-1 max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain sticky top-[64px] z-50 bg-white'>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={homeIcon} alt="Home" /> Home</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={shortsIcon} alt="Shorts" /> Shorts</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={subscriptionsIcon} alt="Subscriptions" /> Subscriptions</Link></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={libraryIcon} alt="Library" /> Library</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={historyIcon} alt="History" /> History</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={yourVideosIcon} alt="YourVideos" /> Your Videos</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={watchLaterIcon} alt="WatchLater" /> Watch Later</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={likedVideosIcon} alt="LikedVideos" /> Liked Videos</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> Show More</Link></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className='font-medium pt-5'>Subscriptions</h1>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> Scary Fun <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="ScaryFun" /> </Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> Crime Tak <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="CrimeTak" /> </Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> Show More... <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> </Link></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className='font-medium pt-5'>Explore</h1>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={trendingIcon} alt="Trending" /> Trending</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={shoppingIcon} alt="Shopping" /> Shopping</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={musicIcon} alt="Music" /> Music</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={moviesIcon} alt="Movies" /> Movies</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={liveIcon} alt="Live" /> Live</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={gamingIcon} alt="Gaming" /> Gaming</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={newsIcon} alt="News" /> News</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={sportsIcon} alt="Sports" /> Sports</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={learningIcon} alt="Learning" /> Learning</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={fashionAndBeautyIcon} alt="FashionBeauty" /> Fashion & Beauty</Link></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className='font-medium pt-5'>More From Youtube</h1>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={ytPremiumIcon} alt="YoutubePremium" /> Youtube Premium</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={ytStudioIcon} alt="YoutubeStudio" /> Youtube Studio</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={ytMusicIcon} alt="YoutubeMusic" /> Youtube Music</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={ytKidsIcon} alt="YoutubeKids" /> Youtube Kids</Link></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={settingsIcon} alt="Settings" /> Settings</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={reportHistoryIcon} alt="ReportHistory" /> Report History</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={helpIcon} alt="Help" /> Help</Link></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><Link to={'/'}> <img className='inline-block align-bottom mr-3' src={sendFeedbackIcon} alt="Send Feedback" /> Send Feedback</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar;
