import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [ searchParams ] = useSearchParams();

    useEffect(() => {
        dispatch(openMenu());
        window.scrollTo(0,0);
    }, []);

  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 flex w-full'>
        <div>
          <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  )
}

export default WatchPage