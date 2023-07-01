import React, { useRef } from 'react'
import Button from './Button'
import letScrollIcon from '../assets/icons/left-scroll.svg';
import rightScrollIcon from '../assets/icons/right-scroll.svg';

const btnList = ['All', 'Gaming', 'Songs', 'Live', 'Cricket', 'News', 'Bollywood', 'Computer', 'Scene', 'Mixes', 'History', 'programming', 'Hollywood'];

const ButtonList = () => {

  const scrollRef = useRef(null);

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(getComputedStyle(scrollRef.current.children[0]).width);
      scrollRef.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(getComputedStyle(scrollRef.current.children[0]).width);
      scrollRef.current.scrollLeft = scrollLeft + itemWidth * 3;
    });
  };

  return (
    <div className='flex sticky top-[64px] z-40 bg-white pb-2'>
      <button onClick={prev} className='hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100 fixed z-50'><img alt='leftScrollBtn' className='inline-block' src={letScrollIcon} /></button>
      <div ref={scrollRef} className='max-w-[86%] overflow-x-hidden flex mx-12'>
        {
          btnList.map((btnName, index) => {
            return <Button key={index} name={btnName} />
          })
        }
      </div>
      <button onClick={next} className='hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100 fixed z-50'><img alt='rightScrollBtn' className='inline-block' src={rightScrollIcon} /></button>
    </div>
  )
}

export default ButtonList;
