import React from "react";
import { Footer } from "../Components/Footer";
import NavB from "../Components/NavB";
import { TopHeader } from "../Components/TopHeader";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
  return (
    <div className="blog-container">
      <TopHeader />
      <NavB />

      <h1 className="text-center pt-5" style={{ color: "#5db9ac",fontWeight:"300" }}>
        Latest Blogs
      </h1>

      <div className="container pt-5 pb-5 blog-containeraccordion d-flex align-items-center justify-content-evenly flex-wrap">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
