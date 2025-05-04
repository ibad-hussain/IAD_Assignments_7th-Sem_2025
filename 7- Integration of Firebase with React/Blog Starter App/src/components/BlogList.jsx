import React from 'react';

const BlogList = ({ blogs }) => {
    return (
        <div className='blogList-main'>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
