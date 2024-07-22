import React, { useState } from 'react';
import { PlusCircle, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PostsManagement.css';

const PostsManagement = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Recycling Tips', thumbnail: '/api/placeholder/300/200' },
    { id: 2, title: 'Eco-Friendly Living', thumbnail: '/api/placeholder/300/200' },
    { id: 3, title: 'Sustainable Energy', thumbnail: '/api/placeholder/300/200' },
    { id: 4, title: 'Zero Waste Lifestyle', thumbnail: '/api/placeholder/300/200' },
  ]);

  return (
    <div className="posts-management">
      <div className="posts-card">
        <div className="posts-header">
          <h2 className="posts-title">Posts Management</h2>
          <Link to="/add-post" className="add-post-btn">
            <PlusCircle className="btn-icon" />
            Add New Post
          </Link>
        </div>
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post.id} className="post-item">
              <img src={post.thumbnail} alt={post.title} className="post-thumbnail" />
              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <Link to={`/edit-post/${post.id}`} className="edit-post-btn">
                  <Edit className="btn-icon" />
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsManagement;