import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("postlist.ejs", { posts: blogPosts });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

var blogPosts = [
  { id: 1, title: "Welcome to My Blog", author: "Joshua", content: "This is the first post." },
  { id: 2, title: "JavaScript Tips", author: "Joshua", content: "Here are some useful JavaScript tips." },
  { id: 3, title: "Express Fundamentals", author: "Joshua", content: "Learn how to build servers with Express." }
];

