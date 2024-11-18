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
                <div className="box box1">
                    <h4>Announcement 1</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida, purus quis sodales placerat, mi mi consequat magna, id tristique nunc quam vel libero. Fusce quis pulvinar odio, sed commodo urna. Ut et faucibus mauris, varius pretium dolor. Vivamus mollis turpis nunc, molestie commodo nulla mattis ac.
                    </p>
                </div>
                <div className="box box2">
                    <h4>Announcement 2</h4>
                    <p>
                        Etiam dapibus pharetra arcu, facilisis consequat dui auctor in. Integer tellus velit, vehicula nec rutrum non, dapibus nec ligula. Phasellus non magna quis velit suscipit mattis. Etiam at tristique ligula. Proin malesuada dapibus scelerisque. Praesent in orci at erat vulputate mollis. Cras vitae nibh ex.
                    </p>
                </div>

                {/* Second Row */}
                <div className="box box3">
                    <h4>Trending Post</h4>
                    <p>
                        Donec vestibulum lacus non arcu tincidunt venenatis. Suspendisse erat enim, sollicitudin ut viverra vel, mollis at nisl.
                    </p>
                </div>
                <div className="box box4">
                    <h4>Latest Post</h4>
                    <p>
                        Nunc vitae sem sit amet velit tempor posuere sed vel orci. Suspendisse rutrum, ipsum maximus mattis posuere, purus dui malesuada urna.
                    </p>
                </div>

                <div className="box box5">
                    <Calendar onChange={setDate} value={date} />
                </div>
                <div className="box box6">Picture 6</div>

                {/* Third Row */}
                <div className="box box7">
                    <h4>Current Offers</h4>
                    <p>
                        Nunc vitae sem sit amet velit tempor posuere sed vel orci. Suspendisse rutrum, ipsum maximus mattis posuere, purus dui malesuada urna.
                    </p>
                </div>
            </div>
        </div>
    );
};