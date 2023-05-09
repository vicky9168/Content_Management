import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(false);
  const API = axios.create({ baseURL: "http://localhost:5000" });
  useEffect(() => {
    API.get("/api/posts")
      .then((res) => setPosts(res.data))
      .then((res) => setMessage(true))
      .catch((err) => console.log(err));
  }, []);
  //   const posts= [{
  // title:"Wired",
  // imageUrl:"https://blog.bit.ai/wp-content/uploads/2020/09/screenshot-www.wired_.com-2020.09.08-10_48_18.jpg",
  // content:"Wired is a massively popular publication, good at capturing real insights into the tech world, no stranger to topics like technology, entertainment, science, culture, politics, and social media. Informed and comprehensive, Wired is basically the perfect tech blog to follow."
  //   },
  //   {
  //     title:"TechCrunch",
  //     imageUrl:"https://blog.bit.ai/wp-content/uploads/2020/09/screenshot-techcrunch.com-2020.09.08-10_48_58.jpg",
  //     content:"Invest yourself in the business verse of the tech world with one of the most popular technology blogs thriving this year- TechCrunch. The blog publishes content on businesses related to tech, analysis of emerging trends in tech, technology news, and listings of new tech products in the market. It is one of the first publications to report broadly on tech startups and funding rounds. TechCrunch offers knowledge about new gizmos and business-related apps. It is like a reservoir of information on Internet companies & startups around the world."
  //       },
  //       {
  //         title:"Recode",
  //         imageUrl:"https://blog.bit.ai/wp-content/uploads/2020/09/screenshot-www.vox_.com-2020.09.08-10_49_54.jpg",
  //         content:"Currently, owned by VOX media, Recode gives the most updated independent technology news, analysis trends, and reviews from the most respected and informed journalists as well as bloggers in media and technology.Recode is uncovering and explaining how our tech world is changing by focusing on the businesses of Silicon Valley.Its founder Kara Swisher has all the connections to the latest tech tips and products, making it a robust technology blog to read!"
  //           }
  //         ,
  //         {
  //           title:"Mashable",
  //           imageUrl:"https://blog.bit.ai/wp-content/uploads/2020/09/screenshot-in.mashable.com-2020.09.08-10_50_41.jpg",
  //           content:"Mashable is a world-renowned, entertainment, and multi-platform media channel.Powered by its own proprietary technology, this tech blog is the go-to source for tech, digital culture, and entertainment content for its influential and dedicated global audience!It is one of the most influential blogs on technology on the internet today! Mashable provides information to those who wish to catch up on all most everything happening around the tech world including movies, travel, finance, and, of course, gadgets."
  //             }
  //           ]
  return (
    <>
      {message && (
        <h1
          style={{
            textAlign: "center",
            padding: "20px 0px",
            color:"#009bff"
          }}
        >
          Blogs
        </h1>
      )}
      <div className="main-div">
        {posts.map((post) => (
          <div key={post._id} className="inside-div">
            <h2>{post.title}</h2>
            <img src={post.imageUrl} alt="img" />
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
