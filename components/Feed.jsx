"use client";
import { useState,useEffect } from "react";
import PromptCard from "./PromptCard";
const PromptCardList = ({ data, handleTagClick }) => {

  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          image = {post.image}
          username = {post.username}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setsearchText] = useState('')
  const [allPosts, setAllPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };
  useEffect(()=>{
    fetchPosts()

  },[])
  const handleSearchChange = (e) =>{

    
  }

  return (
   <section className="feed">
    <form action="" className="relative w-full flex-center">
      <input type="text" placeholder="search for a tag or username"
      value = {searchText} onChange={handleSearchChange} className="search_input peer"/>
    </form>
    <PromptCardList data = {allPosts}
      handleTagClick = {()=> {}}>
      

    </PromptCardList>
   </section>
  )
}

export default Feed