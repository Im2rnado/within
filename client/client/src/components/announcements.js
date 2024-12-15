import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Boxes.css";

export default function Announcements() {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/announcements").then((response) => {
            setAnnouncements(response.data.announcements);
        });
    }, []);

    return (
        <>
            {announcements && announcements.map((announcement) => (
                <div className="box box1">
                    <h4>{announcement?.title}</h4>
                    <p>{announcement?.content?.length > 320 ? announcement?.content?.substring(0, 320) + '...' : announcement?.content}</p>
                    <p className="announcement-meta">
                        Announced by <b>{announcement?.author}</b> on{" "}
                        <b>{new Date(announcement?.date).toLocaleDateString()}</b> at{" "}
                        <b>{new Date(announcement?.date).toLocaleTimeString()}</b>
                    </p>
                </div>

            ))}
        </>
    );
};