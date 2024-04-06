import React from 'react'
import Link from 'next/link'

const Form = ({
  post,setPost,submitting,handleSubmit,type
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className='head_text text_left' ><span className='blue_gradient'>{type} Post</span></h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world and let your imagination run wild with any AI 
        powered platform
      </p>
      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
          <label >
            <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI prompt</span>
            <textarea value = {post.prompt} onChange={(e)=>{
            setPost({
              ...post,
              prompt : e.target.value
            })
          }
          
          } placeholder="Write your prompt here..." className='form_textarea mt-5'/>
          </label>
          <label >
            <span className='font-satoshi font-semibold text-base text-gray-700'> Tag <span className='font-normal'>(#product #webdevelopment etc)</span></span>
            <input value = {post.tag} onChange={(e)=>{
            setPost({
              ...post,
              tag : e.target.value
            })
          }
          
          } placeholder="#tag" required className='form_input mt-5'/>
          </label>
          <div className="flex-end mx-3 mb-5 gap-4">
            <button type = "submit" disabled = {submitting} className=
            "px-5 py-1.5 text-sm bg-primary-orange rounde-full text-white">
              {
                submitting ? `${type}...` : type
              }

            </button>
            <Link href="/" className="text-gray-500">
              Cancel
            </Link>
          </div>
         
      </form>
    </section>
  )
}

export default Form