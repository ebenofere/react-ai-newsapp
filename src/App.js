import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";

const alanKey =
  "7996be56c8ddc53a68c2242adfb07bdf2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log("articles");
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
