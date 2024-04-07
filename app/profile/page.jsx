"use client";
import { useState,useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
const MyProfile = () => {
    const router = useRouter()
    const {data:session} = useSession();
   
    const [allPosts, setAllPosts] = useState([]);
    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
        console.log('the data here : ',data)
        setAllPosts(data);
      };
      useEffect(()=>{
        console.log(session?.user.id)
        if(session?.user.id){
            fetchPosts()
        }
      },[])
    const handleEdit = (post)=>{
        router.push(`/update-prompt?id=${post._id}`)

    }
    const handleDelete =  async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt")
        if(hasConfirmed){
            try {
                await fetch(`/api/prompt/${post._id.toString()}`,{
                    method : 'DELETE'
                })
                const filteredPosts = allPosts.filter((p)=>{
                    p._id !== post._id 
                })
                setAllPosts(filteredPosts)
            } catch (error) {
                console.log('failed to delete the post due to : ',error)
                
            }
        }

    }
    console.log('all posts = ',allPosts)
  return (
    <Profile
    name = "My" desc = "Welcom to your profile." data = {allPosts}
    handleEdit = {handleEdit}
    handleDelete = {handleDelete}
    />
  )
}

export default MyProfile