import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new Website", body: "Lorem ipsum...", author: "Luigi", id: 1 },
    { title: "Welcome party", body: "Lorem ipsum...", author: "Mario", id: 2 },
    {
      title: "Javascript is awesome!",
      body: "Lorem ipsum...",
      author: "Gabriel",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs title" />
    </div>
  );
};

export default Home;
