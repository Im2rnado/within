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

    const handleDeleteAnnouncement = (title) => {
        if (!window.confirm("Are you sure you want to delete this announcement?")) return;

        axios
            .delete(`http://localhost:4000/deleteAnnouncement/${title}`)
            .then((response) => {
                if (response.data.success) {
                    setAnnouncements(announcements.filter((announcement) => announcement.title !== title));
                } else {
                    alert("Failed to delete announcement");
                }
            })
            .catch((err) => {
                alert(`Error: ${err.response?.data?.message || "An error occurred"}`);
            });
    };

    return (
        <>
            {announcements && announcements.map((announcement) => (
                <div className="post">
                    {localStorage.getItem('type') === "admin" && (
                        <button
                            onClick={() => handleDeleteAnnouncement(announcement.title)}
                            className="delete"
                            title="Delete Announcement"
                        >
                            {/* Delete Icon (Trash Can) */}
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(16,16)"><path d="M6.49609,1c-0.82031,0 -1.49609,0.67578 -1.49609,1.49609v0.50391h-3v1h1v8.5c0,0.82813 0.67188,1.5 1.5,1.5h6c0.82813,0 1.5,-0.67187 1.5,-1.5v-8.5h1v-1h-3v-0.50391c0,-0.82031 -0.67578,-1.49609 -1.49609,-1.49609zM6.49609,2h2.00781c0.28125,0 0.49609,0.21484 0.49609,0.49609v0.50391h-3v-0.50391c0,-0.28125 0.21484,-0.49609 0.49609,-0.49609zM5,5h1v7h-1zM7,5h1v7h-1zM9,5h1v7h-1z"></path></g></g>
                            </svg>
                        </button>
                    )}

                    <h4>{announcement?.title}</h4>
                    <p>{announcement?.content}</p>
                    <p className="announcement-meta">
                        Announced by <b>{announcement?.author}</b> on{" "}
                        <b>{new Date(announcement?.date).toLocaleDateString()}</b> at{" "}
                        <b>{new Date(announcement?.date).toLocaleTimeString()}</b>
                    </p>
                </div>
            ))}
            <br />
        </>
    );
};