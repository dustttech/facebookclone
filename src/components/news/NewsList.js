import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroller";
import { useFetch } from "../../hooks/useFetch";
import { usePost } from "../../hooks/usePost";
import { List, Avatar } from "antd";

import Loading from "../loading/loading";
import NewsItem from "./NewsItem";

// const fakeDataUrl =
//   "https://randomuser.me/api/?results=12&inc=name,gender,email,nat&noinfo";

const postURL = "https://60ae161f80a61f0017332633.mockapi.io/posts";

function NewsList() {
  const [data, setData] = useState([]);
  const { loading, products } = useFetch(postURL);

  // usePost("https://60ae161f80a61f0017332633.mockapi.io/posts", {
  //   caption: "Test Caption.",
  //   avatar: "https://cdn.fakercloud.com/avatars/steynviljoen_128.jpg",
  //   author_firstname: "Phong",
  //   author_lastname: "Luc",
  //   img: "http://placeimg.com/640/480",
  // });

  // console.log(products);
  useEffect(() => {}, []);

  const handleInfiniteOnLoad = () => {
    if (data.length > 10) {
      console.log("no more item to load");
      return;
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <InfiniteScroll loadMore={handleInfiniteOnLoad} pageStart={0}>
      <List
        dataSource={products}
        renderItem={(item) => <NewsItem key={item.id} {...item} />}
      />
    </InfiniteScroll>
  );
}

export default NewsList;
