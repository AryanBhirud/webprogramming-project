import React from 'react';
import './SmallPost.css';

const SmallPost = ({ title, author, image, description }) => (
    <div className="card-sm">
      <p className="card-title-sm">{title}</p>
      <p className="card-author-sm">{author}</p>
      <hr className="card-separator-sm" />
      <img src={image} alt={title} className="card-image-sm" />
      <p className="card-description-sm">{description}</p>
      <hr className="card-separator-sm"/>
    </div>
  );

export default SmallPost;