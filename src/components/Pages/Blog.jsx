// src/pages/Blog.jsx
import React from "react";
import blogPosts from "../../data/blogData";
import BlogCard from "../Blog/BlogCard";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog">
      <h1>Blog de Estrategias Veterinarias</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
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
