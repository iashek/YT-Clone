import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const VideoContainer = () => {
    const dispatch = useDispatch();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        dispatch(openMenu());
        getVideos();
    },[]);
    
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        // try alt: axios
        const json = await data.json();
        // console.log(json);
        setVideos(json.items);
    }

    const handleScroll = () => {
        // const target = e.target;
        console.log("hello1");

        // if(target.scrollHeight - target.scrollTop === target.clientHeight) {
            // console.log("hello");
            // const data = await fetch(YOUTUBE_VIDEOS_API);
            // const json = await data.json();
            // setVideos(...videos, ...json.items);
        // }
    }

    return (
        <div className="flex flex-wrap" onScroll={handleScroll}>
            {videos[0] && <AdVideoCard info={videos[0]} advertisement={true} />}
            {videos.map((video) => (
                <Link key={video.id} to={"/watch?v="+video.id}>
                    <VideoCard info={video} advertisement={false} />
                </Link> 
            ))}
        </div>
    );
};

export default VideoContainer;