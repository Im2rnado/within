import React from "react";
import { useState } from 'react';
import Calendar from "react-calendar";
import "../css/Calendar.css";
import "../css/Boxes.css";
import Offers from "./offers";
import HomeAnnouncements from "./homeAnnouncements";
import HomePosts from "./homePosts";

export default function Home() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="boxes-container">

            <h1><span className="icon">🏠</span>Home</h1>
            <div className="grid-container">
                {/* First Row */}
                <HomeAnnouncements />

                {/* Second Row */}
                <HomePosts />

                <div className="box box5">
                    <Calendar onChange={setDate} value={date} />
                </div>
                <div className="box box6"><img src="https://www.planetaformacion.com/sites/pfu.es/files/styles/img_style_11_21_480/public/images/PHOTO-2022-07-07-12-47-19%202.jpg?itok=5eMY-WRJ" alt="sisi" /></div>

                {/* Third Row */}
                <Offers />
            </div>
        </div>
    );
};