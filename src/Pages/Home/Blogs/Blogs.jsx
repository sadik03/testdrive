import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import BlogCard from "./BlogCard";

const Blogs = ({ searchQuery }) => {
  const [blogs, setBlogs] = useState([]);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  /* Fetch data from blogs JSON file */
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  /* Filter blogs based on search query */
  const filteredBlogs = searchQuery
    ? blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogs;

  const visibleBlogs = showAllBlogs ? filteredBlogs : filteredBlogs.slice(0, 6);

  const handleSeeMore = () => {
    setShowAllBlogs(true);
  };

  return (
    <div className="dark:bg-gray-700 bg-[#68a9d3]  text-gray-700 text-base font-semibold dark:text-white pb-10 md:pb-20" id="blogs">
      <Container>
        <SectionHeader heading={"Sports Blogs"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleBlogs.map((blog, index) => (
            <FadeInAnimation custom={index} key={blog.id}>
              <BlogCard blog={blog}>
                <Link
                  to={`/blog/${blog.id}`}
                  className="btn bg-amber-500 hover:bg-amber-600 mt-4 text-white border-0 transition-transform transform hover:scale-95"
                >
                  Read More
                </Link>
              </BlogCard>
            </FadeInAnimation>
          ))}
        </div>

        {/* See More button */}
        <FadeInAnimation custom={1}>
          <div className="text-center">
            {!showAllBlogs && (
              <button
                className="btn bg-amber-500 hover:bg-amber-600 mt-8 text-white border-0 transition-transform transform hover:scale-95"
                onClick={handleSeeMore}
              >
                See More
              </button>
            )}
          </div>
        </FadeInAnimation>
      </Container>
    </div>
  );
};

export default Blogs;
