import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
    const handleScroll = () => {
        // const target = e.target;
        console.log("hello3");
    }
    return(
    <div onScroll={handleScroll}>
        <ButtonList />
        <VideoContainer />
    </div>
)};

export default MainContainer;