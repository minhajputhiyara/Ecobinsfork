import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import './EditPost.css';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Here you would typically fetch the post data from your API
    // For now, we'll use mock data
    setTitle(`Existing Post ${id}`);
    setContent('This is the content of the existing post.');
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your API to update the post
    console.log('Updated post:', { id, title, content });
    // Redirect or show success message
  };

  return (
    <div className="edit-post">
      <div className="edit-post-header">
        <Link to="/posts-management" className="back-link">
          <ArrowLeft size={24} />
          Back to Posts
        </Link>
        <h1>Edit Post</h1>
      </div>
      <form onSubmit={handleSubmit} className="edit-post-form">
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
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;