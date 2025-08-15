import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ id, title, summary, image, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <article
      className="blog-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <img src={image} alt={title} className="blog-card__image" />
      <div className="blog-card__content">
        <h2 className="blog-card__title">{title}</h2>
        <p className="blog-card__summary">{summary}</p>
        <p className="blog-card__date">{new Date(date).toLocaleDateString()}</p>
      </div>
    </article>
  );
};

export default BlogCard;
