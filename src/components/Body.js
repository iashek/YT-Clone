import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
    const handleScroll = () => {
        // const target = e.target;
        console.log("hello4");
    }

    return(
    <div onScroll={handleScroll}>
        <Head />
        <div className="grid grid-flow-col">
            <Sidebar />
            <Outlet />
        </div>
    </div>
)};

export default Body;