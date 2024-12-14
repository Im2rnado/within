import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Boxes.css";

export default function HomePosts() {
    const [trending, setTrending] = useState({});
    const [latest, setLatest] = useState({});

    useEffect(() => {
        axios.get("http://localhost:4000/homePosts").then((response) => {
            setTrending(response.data.trending);
            setLatest(response.data.latest);
        });
    }, []);

    return (
        <>
            <div className="box box3">
                <h4>Trending Post</h4>
                <p>{trending.content}</p>
                <p className="announcement-meta">
                    Posted by <b>{trending.author}</b> on{" "}
                    <b>{new Date(trending.date).toLocaleDateString()}</b>
                </p>
            </div>
            <div className="box box4">
                <h4>Latest Post</h4>
                <p>{latest.content}</p>
                <p className="announcement-meta">
                    Posted by <b>{latest.author}</b> on{" "}
                    <b>{new Date(latest.date).toLocaleDateString()}</b>
                </p>
            </div>
        </>
    );
};