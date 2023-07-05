import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink  } from 'react-router-dom';

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
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to='/'> <img className='inline-block align-bottom mr-3' src={homeIcon} alt="Home" /> Home</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={shortsIcon} alt="Shorts" /> Shorts</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={subscriptionsIcon} alt="Subscriptions" /> Subscriptions</NavLink ></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={libraryIcon} alt="Library" /> Library</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={historyIcon} alt="History" /> History</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={yourVideosIcon} alt="YourVideos" /> Your Videos</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={watchLaterIcon} alt="WatchLater" /> Watch Later</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={likedVideosIcon} alt="LikedVideos" /> Liked Videos</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> Show More</NavLink ></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className='font-medium pt-5'>Subscriptions</h1>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> Scary Fun <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="ScaryFun" /> </NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> Crime Tak <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="CrimeTak" /> </NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> Show More... <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> </NavLink ></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className='font-medium pt-5'>Explore</h1>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={trendingIcon} alt="Trending" /> Trending</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={shoppingIcon} alt="Shopping" /> Shopping</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={musicIcon} alt="Music" /> Music</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={moviesIcon} alt="Movies" /> Movies</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={liveIcon} alt="Live" /> Live</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={gamingIcon} alt="Gaming" /> Gaming</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={newsIcon} alt="News" /> News</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={sportsIcon} alt="Sports" /> Sports</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={learningIcon} alt="Learning" /> Learning</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={fashionAndBeautyIcon} alt="FashionBeauty" /> Fashion & Beauty</NavLink ></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className='font-medium pt-5'>More From Youtube</h1>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={ytPremiumIcon} alt="YoutubePremium" /> Youtube Premium</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={ytStudioIcon} alt="YoutubeStudio" /> Youtube Studio</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={ytMusicIcon} alt="YoutubeMusic" /> Youtube Music</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={ytKidsIcon} alt="YoutubeKids" /> Youtube Kids</NavLink ></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={settingsIcon} alt="Settings" /> Settings</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={reportHistoryIcon} alt="ReportHistory" /> Report History</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={helpIcon} alt="Help" /> Help</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={sendFeedbackIcon} alt="Send Feedback" /> Send Feedback</NavLink ></li>
      </ul>
    </div>
  )
}

export default Sidebar;
