import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);


  const App =()=>{
    const {name, about, image, posts}=blogData
  
  return (
    <div className="App">
      <Header name={name}/>
      <About image={image}/>
      <ArticleList articles={posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
