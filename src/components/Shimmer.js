import React from 'react'

const ShimmerCard = () => {
  return (
    <div className='p-2 m-2 w-72'>
      <div className='shimmerBG rounded-lg bg-gray-300 w-auto h-40'></div>
      <div>
        <div className='shimmerBG bg-gray-300 my-2 w-auto h-3'></div>
        <div className='shimmerBG bg-gray-300 my-2 w-1/3 h-2'></div>
        <div className='shimmerBG bg-gray-300 my-2 w-1/2 h-2'></div>
      </div>
    </div>
  )
}

const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-start'>
      {
        Array(15).fill().map((val, index) => {
          return <ShimmerCard key={index} />
        })
      }
    </div>
  )
}

export default Shimmer;
