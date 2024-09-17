import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from "../../../Components/Container/Container";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch('/blogs.json') // Adjust the path if necessary
      .then(res => res.json())
      .then(data => {
        const blogDetail = data.find(b => b.id === parseInt(id));
        setBlog(blogDetail);
      })
      .catch(err => console.error('Error fetching blog details:', err));
  }, [id]);

  if (!blog) return <div className="fade-in">Loading...</div>;

  return (
    <div className="dark:bg-gray-700 bg-[#68a9d3]  text-gray-700 dark:text-white">
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          {/* Blog Content */}
          <div className="flex flex-col md:flex-row gap-9 items-center justify-center w-full">
            
            {/* Left Side: Blog Image */}
            <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
              <img src={blog.thumbnail} alt={blog.title} className="responsive-image slide-up" />
            </div>

            {/* Right Side: Blog Text Information */}
            <div className="flex-1 flex flex-col items-start md:items-center gap-3 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 slide-up">{blog.title}</h1>
              <p className="text-lg mb-4 slide-up">{blog.content}</p>
              {/* <p className="text-lg mb-4 slide-up">Author: {blog.author}</p> */}
              <p className="text-lg mb-4 slide-up text-justify break-words">
  {blog.description}
</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
