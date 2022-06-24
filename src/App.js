import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "7996be56c8ddc53a68c2242adfb07bdf2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
