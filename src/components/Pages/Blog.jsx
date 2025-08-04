// src/pages/Blog.jsx
import React from "react";
import blogPosts from "../../data/blogData"; // Ruta relativa a tu estructura
import BlogCard from "../Blog/BlogCard"; // Asegúrate de que la ruta es correcta
import "./Blog.css"; // Opcional para estilos globales

const Blog = () => {
  return (
    <section className="blog">
      <h1>Blog de Estrategias Veterinarias</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            summary={post.summary}
            image={post.image}
            date={post.date}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
