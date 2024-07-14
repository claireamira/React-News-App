import { useEffect, useState } from "react";
import NewsItem from "../Components/NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5b3583075ba1434f920602d4b4a7bd80`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setArticles(data.articles))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, [category]);

  return (
    <>
      <div className="container my-5 p-3 bg-light rounded shadow">
        <h2 className="text-center mb-4">News by <span className="badge bg-info">Amira</span></h2>
        <div className="row justify-content-center">
          {articles.map((news, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsBoard;
