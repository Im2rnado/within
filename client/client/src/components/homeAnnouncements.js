import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Boxes.css";

export default function HomeAnnouncements() {
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
                    <p>{announcement?.content?.length > 300 ? announcement?.content?.substring(0, 300) + '...' : announcement?.content}</p>
                    <p className="announcement-meta">
                        Announced by <b>{announcement?.author}</b> on{" "}
                        <b>{new Date(announcement?.date).toLocaleDateString()}</b>
                    </p>
                </div>

            ))}
        </>
    );
};