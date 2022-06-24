import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles }) => {
  console.log(articles, "articles");

  return (
    <div>
      {articles.map((article, i) => (
        <NewsCard />
      ))}
    </div>
  );
};

export default NewsCards;
