import React from "react";
import { useState } from 'react';
import Calendar from "react-calendar";
import "../css/Calendar.css";
import "../css/Boxes.css";

export default function Boxes() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="boxes-container">
            <div className="grid-container">
                {/* First Row */}
                <div className="box box1">Announcement 1</div>
                <div className="box box2">Ebn A7ba 2</div>

                {/* Second Row */}
                <div className="box box3">Khawal 3</div>
                <div className="box box4">3ars 4</div>
                <div className="box box5">
                    <Calendar onChange={setDate} value={date} />
                </div>
                <div className="box box6">Metnak 6</div>

                {/* Third Row */}
                <div className="box box7">Shaz 7</div>
            </div>
        </div>
    );
};