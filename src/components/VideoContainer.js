import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useRef, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const VideoContainer = () => {
    const dispatch = useDispatch();
    const [videos, setVideos] = useState([]);
    const sentinelRef = useRef(null);

    useEffect(() => {
        dispatch(openMenu());
        getVideos();
        console.log("videos", videos);
    }, []);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    getVideos();
                }
            }
        );

        if(sentinelRef.current) {
            observer.observe(sentinelRef.current);
        };

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [videos])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        // try alt: axios
        const json = await data.json();
        setVideos(prevItems => [...prevItems, ...json.items]);
    }

    return (
        <div className="flex flex-wrap">
            {videos[0] && <AdVideoCard info={videos[0]} advertisement={true} />}
            {videos.map((video, index) => (
                index > 0 && 
                <Link key={video.id} to={"/watch?v="+video.id}>
                    <VideoCard info={video} advertisement={false} />
                </Link> 
            ))}
            <div ref={sentinelRef} ></div>
        </div>
    );
};

export default VideoContainer;