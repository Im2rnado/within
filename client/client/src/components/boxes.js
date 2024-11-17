import React from "react";
import { useState } from 'react';
import Calendar from "react-calendar";
import "../css/Calendar.css";

export default function Boxes() {
    const [date, setDate] = useState(new Date());

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "80vw" }}>
            <div
                style={{
                    display: "grid",
                    position: "initial",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplaterows: "repeat(3, 1fr)",
                    gridGap: "10px",
                    padding: "20px",
                    paddingRight: "0px",
                    flex: 1,
                    marginLeft: "px",
                }}
            >
                {/* First Row */}
                <div style={{ ...boxStyle, gridColumn: "span 2", height: "30vh" }}>Announcement 1</div>
                <div style={{ ...boxStyle, gridColumn: "span 2", height: "30vh" }}>Ebn A7ba 2</div>

                {/* Second Row */}
                <div style={{ ...boxStyle, height: "40vh" }}>Khawal 3</div>
                <div style={{ ...boxStyle, height: "40vh" }}>3ars 4</div>
                {/* Green Calendar Box */}
                <div style={{ ...boxStyle, height: "40vh", backgroundColor: "#9DFF4A" }}>
                    <Calendar onChange={setDate} value={date} />
                </div>
                <div style={{ ...boxStyle, gridRow: "span 2" }}>Metnak 6</div>

                {/* Third Row */}
                <div style={{ ...boxStyle, gridColumn: "span 3", height: "30vh" }}>Shaz 7</div>

            </div>
        </div>
    );
};

// Common styling for all boxes
const boxStyle = {
    backgroundColor: "#2e2e2e",
    border: "2px solid #a34fe4",
    borderRadius: "30px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
};