import React from 'react';
import { RecommendExhbn, PopularExhbn, ShowingExhbn, SearchArea, HallGrid } from 'container/index';

const Home = () => {
  if(localStorage.getItem("token") == null){
    return(<>
      <SearchArea />
      <HallGrid />
      <ShowingExhbn />
      <PopularExhbn />
      </>)
  }else {
    return(<>
      <SearchArea />
      <HallGrid />
      <RecommendExhbn />
      <PopularExhbn />
      </>)
  }
  
};

export default Home;
