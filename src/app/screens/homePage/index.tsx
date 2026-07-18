import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisements";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events"
//@ts-ignore
import "../../../css/home.css"

export default function HomePage() {
    //selector: store => data

    useEffect(() => {
        //BACKENDAN SERVER DATA REQUEST 

        //SLICE: DATA => STORE
    }, [])

    return <div className={"homepage"} >
        <Statistics />
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUsers />
        <Events />
    </div>;
}
