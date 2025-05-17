import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("postlist.ejs", { posts: blogPosts });
});

app.get("/blogpost/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = blogPosts.find(p => p.id === postId);

  if (post) {
    res.render("blogpost.ejs", { post: post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/create-post", (req, res) => {
  // get the data from the form
  const {title, content} = req.body;

  // get list of current post IDs so we can generate a new one
  var foundValidID = false;
  var newID = 0;
  do {
    newID = Math.floor(Math.random() * 1000);    
  } while (blogPosts.some(post => post.id == newID));

  const newPost = {
    id: newID,
    title: title,
    content: content
  };

  blogPosts.push(newPost);
  res.redirect("/");
});

app.post("/edit-post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  var post = blogPosts.find(p => p.id === postId);

  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;   
    res.redirect("/blogpost/"+postId);
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/delete-post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = blogPosts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    blogPosts.splice(postIndex, 1);
    res.redirect("/");
  } else {
    res.status(404).send("Post not found");
  }

});





app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

var blogPosts = [
  { id: 1, title: "Welcome to My Blog", content: "This is the first post." },
  { id: 2, title: "JavaScript Tips", content: "Here are some useful JavaScript tips." },
  { id: 3, title: "Express Fundamentals", content: "Learn how to build servers with Express." }
];

