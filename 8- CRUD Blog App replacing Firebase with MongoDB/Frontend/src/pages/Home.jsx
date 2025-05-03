import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import axios from 'axios';

const Home = () => {

  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const [formData, setFormData] = useState({
    username: '',
    title: '',
    content: '',
  });

  const fetchBlogs = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.get('http://localhost:4000/api/blog/all-blogs');

      if (data.success) {
        setBlogs(data.blogs);
        setSelectedBlog(null);
      }
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post('http://localhost:4000/api/blog/create-blog', formData);

      if (res.data.success) {
        alert('Blog created!');
        setFormData({ username: '', title: '', content: '' });
        setShowModal(false);
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error creating blog:', error.response?.data || error.message);
      alert('Failed to create blog');
    }
  };


  return (
    <div className='home-main'>

      <div className="nav-main">
        <div className="nav-line"></div>

        <ul className="blog-nav">
          <li onClick={() => setSelectedBlog(null)} className={!selectedBlog ? 'active' : ''}>All Blogs</li>
          {blogs.map(blog => (
            <li
              key={blog._id}
              onClick={() => setSelectedBlog(blog)}
              className={selectedBlog && selectedBlog._id === blog._id ? 'active' : ''}
            >
              {blog.title}
            </li>
          ))}
        </ul>
      </div>


      <div className="articles-section">
        <div className="create-blog-btn">
          <button onClick={() => setShowModal(true)}>
            Create New Blog
          </button>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Create Blog</h3>
              <form onSubmit={handleSubmit} className="blog-form">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="content"
                  placeholder="Content"
                  rows="5"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <div className="modal-buttons">
                  <button type="submit">Post</button>
                  <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}


        <div className="all-blogs">
          {selectedBlog ? (
            <div className="blog-card" key={selectedBlog._id}>
              <h3 id='blog-title'>{selectedBlog.title}</h3>
              <p id='blog-content'>{selectedBlog.content}</p>
              <div className="details">
                <p>{selectedBlog.username}</p>
                <p>{new Date(selectedBlog.date).toLocaleDateString('en-GB', options)}</p>
              </div>
            </div>
          ) : blogs.length > 0 ? (
            blogs.map(blog => (
              <div className="blog-card" key={blog._id}>
                <h3 id='blog-title'>{blog.title}</h3>
                <p id='blog-content'>{blog.content}</p>
                <div className="details">
                  <p>{blog.username}</p>
                  <p>{new Date(blog.date).toLocaleDateString('en-GB', options)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs yet.</p>
          )}
        </div>

      </div>

    </div>
  );
};

export default Home;
