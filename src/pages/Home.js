import React from "react";
import NewsList from "../components/news/NewsList";
import UserUpload from "../components/news/UserUpload";
// import NewsNavbar from "./../components/navbar/NewsNavbar";

function Home() {
  return (
    <section className="container">
      {/* <NewsNavbar /> */}
      <UserUpload />
      <NewsList />
    </section>
  );
}

export default Home;
