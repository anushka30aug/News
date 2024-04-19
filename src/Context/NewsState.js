import { useState } from "react";
import newsContext from "./NewsContext";
const KEY =process.env.REACT_APP_API_KEY;
console.log('key ',KEY)

function NewsState(props) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('business');
  const [country, setCountry] = useState('in');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [progress, setProgress] = useState(0);

  const fetchNews = async () => {
    if(page===1)
    {
      setData(prev=>[])
    }
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=${KEY}`;
      console.log('Fetching data', url);
      const response = await fetch(url);
      const news = await response.json();
      setData((prevData) => [...prevData, ...news.articles]);
      setPage((prevPage) => prevPage + 1);
      setTotal(news.totalResults);
    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  };

  return (
    <newsContext.Provider value={{category,country,page, data, setData, setCategory, setPage, setCountry, total, fetch: fetchNews, progress, setProgress }}>
      {props.children}
    </newsContext.Provider>
  );
}

export default NewsState;
