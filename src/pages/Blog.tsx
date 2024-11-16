import React, { useEffect, useState } from 'react';
import '../styles/Blog.scss';

type Article = {
  title: string;
  description: string;
  url: string;
  published_at: string;
  cover_image?: string;
};

const Blog = () => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=ikramkharbouch')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setArticle(data[0]); // Get the most recent article
        }
      });
  }, []);

  return (
    <section className='blog-container'>
      <h2>Blog</h2>
      {article ? (
        <div className="blog-card">
          <img src={article.cover_image || '/default-cover.jpg'} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          <small>Published on: {new Date(article.published_at).toDateString()}</small>
        </div>
      ) : (
        <p>Loading your latest article...</p>
      )}
    </section>
  );
};

export default Blog;
