import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

const BlogForm = ({ fetchBlogs }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) return;
        try {
            await addDoc(collection(db, "blogs"), {
                title,
                content,
                createdAt: Timestamp.now()
            });
            setTitle('');
            setContent('');
            fetchBlogs();
        } catch (error) {
            console.error("Error adding blog:", error);
        }
    };

    return (
        <div className="blogForm-main">
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
                    <button type="submit">Post Blog</button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
