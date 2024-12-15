import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Boxes.css";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/posts").then((response) => {
            setPosts(response.data.posts);
        });
    }, []);

    return (
        <>
            {posts && posts.map((post) => (
                <div className="post">
                    <h4>{post?.title}</h4>
                    <p>{post?.content}</p>
                    <p className="announcement-meta">
                        Posted by <b>{post?.author}</b> on{" "}
                        <b>{new Date(post?.date).toLocaleDateString()}</b> at{" "}
                        <b>{new Date(post?.date).toLocaleTimeString()}</b>
                    </p>
                </div>
            ))}
            <br />
        </>
    );
};