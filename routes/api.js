const express = require("express");

const router = express.Router();

const BlogPost = require("../models/covid");

// Routes
router.get("/", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

router.post("/save", (req, res) => {
  const data = {
    title: "TITLE",
    body: "BODY",
    date: "2022-12-12",
  };
  console.log(data);

  const newBlogPost = new BlogPost(data);

  newBlogPost.save((error) => {
    console.log("masul");
    if (error) {
      res.status(500).json({msg: "Sorry, internal server errors"});
      return;
    }
    // BlogPost
    return res.json({
      msg: "Your data has been saved!!!!!!",
    });
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "peterson",
    age: 5,
  };
  res.json(data);
});

module.exports = router;
