import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import BlogForm from '../components/BlogForm';
import BlogList from '../components/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const data = await getDocs(q);
        const blogsArray = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setBlogs(blogsArray);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className='home-main'>
            <h1>FIREBASE BLOG APP</h1>
            <BlogForm fetchBlogs={fetchBlogs} />
            <BlogList blogs={blogs} />
        </div>
    );
};

export default Home;
