import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const ChatMessages = useSelector(store => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");

    console.log(liveMessage, "liveMessage");

    useEffect(() => {
        const i = setInterval(() => {
            // API polling
            console.log("Polling test");
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20),
            }));
        },500);

        return () => clearInterval(i);
    },[])

  return (
    <>
        <div className='ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            {/* Don't use indexes as keys */}
            {ChatMessages.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)}
        </div>
        <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) => {e.preventDefault(); dispatch(addMessage({name: "Kaizen aLIVE", message: liveMessage})); setLiveMessage("")}} >
            <input className='px-2 w-96' id="chat-input" type='text' value={liveMessage} onChange={(e)  => setLiveMessage(e.target.value) } />
            <button className='px-2 mx-2 bg-green-100'>Send</button>
        </form>
    </>
  )
}

export default LiveChat