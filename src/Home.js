import { useState } from "react";

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
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
