import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "Lorem ipsum...",
      author: "Gabriel",
      id: 1,
    },
    { title: "Welcome party", body: "Lorem ipsum...", author: "Mario", id: 2 },
    {
      title: "Javascript is awesome!",
      body: "Lorem ipsum...",
      author: "Gabriel",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("forta steaua");
  });
  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All blogs title"
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author == "Gabriel")}
        title="Gabriel's blogs"
      />
    </div>
  );
};

export default Home;
