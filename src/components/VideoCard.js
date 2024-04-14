import React from 'react'

const VideoCard = ({ info, advertisement }) => {
    // console.log(info);
    const { snippet, statistics} = info;
    const { channelTitle, title, thumbnails } = snippet;
    // const { bool } = adv;

    // const w = document.getElementsByClassName("vidCard").offsetWidth;
    // console.log(w);

  return (
    // <div className='p-2 m-2 shadow-lg h-auto md:w-1/6 lg:w-1/3'>
    // <div className='p-2 m-2 flex-1 shadow-lg w-56 sm:w-60 md:w-72 lg:w-96'>
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2 overflow-hidden text-nowrap text-ellipsis'>{title}</li>
              { !advertisement?
                <li>{channelTitle}</li> :
                null
              }
              { !advertisement?
                <li>{statistics.viewCount} views</li> :
                <li><span className='font-bold'>Sponsored</span> <span className='font-bold'>&#183;</span> {channelTitle}</li>
              }
        </ul>
    </div>
  )
}

// Create advertisement video card from this
export const AdVideoCard = ({ info }) => {
  return (
    <div className='border border-red-900'>
      <VideoCard info={info} advertisement={true}/>
    </div>
  );
};

export default VideoCard