import React from 'react';
import './LargePost.css';

const LargePost = ({ title, author, image, description }) => (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-author">{author}</p>
      <hr className="card-separator" />
      <img src={image} alt={title} className="card-image" />
      <p className="card-description">{description}</p>
      <hr className="card-separator" />
    </div>
  );

export default LargePost;