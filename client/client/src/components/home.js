import React from "react";
import { useState } from 'react';
import Calendar from "react-calendar";
import "../css/Calendar.css";
import "../css/Boxes.css";
import Offers from "./offers";
import Announcements from "./announcements";
import HomePosts from "./homePosts";

export default function Home() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="boxes-container">
            <div className="grid-container">
                {/* First Row */}
                <Announcements />

                {/* Second Row */}
                <HomePosts />

                <div className="box box5">
                    <Calendar onChange={setDate} value={date} />
                </div>
                <div className="box box6"><img src="https://i.pinimg.com/originals/c8/0d/a2/c80da26b5730b481c8e5f0c5e8a9e69f.jpg" alt="sisi" /></div>

                {/* Third Row */}
                <Offers />
            </div>
        </div>
    );
};