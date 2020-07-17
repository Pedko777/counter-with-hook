import React, { useState, useEffect } from 'react';

import { getNews } from '../../servicrs/ApiNews';

const NewsPageHook = () => {
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    getNews()
      .then(data => setListNews(data.articles))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        {listNews.map(item => {
          //   console.log(item)
          return (
            <li key={item.publishedAt}>
              <h3>{item.title}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NewsPageHook;
