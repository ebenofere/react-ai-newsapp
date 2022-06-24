// // Use this sample to create your own voice commands
// intent('what is the capital of Spain', p => {
//     p.play('(The answer is Madrid)');
// });
//
// intent('What is your name', (p) => {
//     p.play({command: 'testCommand'});
// })

const API_KEY = "e899a96657604c5ba97a23fe5c54d1c3";
let savedArticles = [];

// NEWS BY SOURCE
intent("Give me the news from $(source* (.*))", (p) => {
  let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

  if (p.source.value) {
    NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value
      .toLowerCase()
      .split(" ")
      .join("-")}`;
  }

  api.request(NEWS_API_URL, (error, response, body) => {
    const { articles } = JSON.parse(body);
    console.log(articles, "articles");

    if (!articles.length) {
      p.play("Sorry, please try searching for news from a different source");
      return;
    }

    savedArticles = articles;

    p.play({ command: "newHeadlines", articles });
    p.play(`Here are the (latest|recent) ${p.source.value} news.`);
  });
});
