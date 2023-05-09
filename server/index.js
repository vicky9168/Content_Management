const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/blog');
const dotenv =require('dotenv')

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL ;
mongoose.set('strictQuery',true);

mongoose.connect(DATABASE_URL,{ useNewUrlParser:true})
.then(()=>console.log("Database connected"))
.then(()=>app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)}))
.catch((err)=>console.log(err.message))

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/posts', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    content: req.body.content
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.log("err");
    res.status(400).json({ message: err.message });
  }
});

app.get("/", (req,res)=>{
    res.send("Server is running");
})


