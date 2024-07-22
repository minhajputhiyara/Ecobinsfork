import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AddPost.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your API
    console.log('New post:', { title, content });
    // Reset form or redirect
  };

  return (
    <div className="add-post">
      <div className="add-post-header">
        <Link to="/posts-management" className="back-link">
          <ArrowLeft size={24} />
          Back to Posts
        </Link>
        <h1>Add New Post</h1>
      </div>
      <form onSubmit={handleSubmit} className="add-post-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          <Save size={20} />
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;