import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../../data/blogData";
import "./BlogPost.css";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <p>Artículo no encontrado</p>;

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.titulo} className="blog-post-img" />
      <h1 className="blog-post-title">{post.title}</h1>
      <div className="blog-post-content">
        <div className="blog-post-content">
          {post.content.split("\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <p className="blog-post-date">{post.date}</p>
    </div>
  );
};

export default BlogPost;
