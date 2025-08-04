// src/components/BlogCard.jsx
import React from "react";
import "./BlogCard.css"; // Opcional si vas a usar estilos personalizados

const BlogCard = ({ title, summary, image, date }) => {
  return (
    <article className="blog-card">
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
