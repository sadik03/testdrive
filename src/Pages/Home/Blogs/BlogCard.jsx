import React from "react";

const BlogCard = ({ blog, children }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-500">
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold dark:text-white">{blog.title}</h3>
      <p className="text-white-600 dark:text-gray-300 mt-2">
        {blog.description.slice(0, 50)}...
      </p>
      {children}
    </div>
  );
};

export default BlogCard;
