import React from 'react';
import ArticleList from './ArticleList';

const ArticleList = ({ articles }) => (
  <main>
    {articles.map(article => (
      <Article 
        key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview}
      />
    ))}
  </main>
);

export default ArticleList;