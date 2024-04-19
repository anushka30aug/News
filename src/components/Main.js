import style from '../CSS/Main.module.css';
import React, { useContext, useEffect } from 'react';
import News from './News';
import InfiniteScroll from 'react-infinite-scroll-component';
import newsContext from '../Context/NewsContext';

export default function Main() {
  const { data,total, fetch, category,country} = useContext(newsContext);

  useEffect(() => {
      console.log('Main fetching useEffect');
      fetch();
      //eslint-disable-next-line
  }, [category,country]);

  const fetchMore = () => {
    console.log('hasmore')
    fetch();
  };

  return (
    <InfiniteScroll
      dataLength={data.length}
      hasMore={data.length < total}
      next={fetchMore}
      inverse={false}
    >
      <div className={style.main}>
       
        {data.map((element, index) => (
          <News key={index} props={element} />
        ))}
      </div>
    </InfiniteScroll>
  );
}

