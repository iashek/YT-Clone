import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Esports", "News", "Trending", "Romance", "Trailers", "Cooking", "Hollywood"];

const ButtonList = () => {
    return <div className="flex">
        {list.map(btn => <Button key={btn} name={btn} />)}
    </div>
}

export default ButtonList