import React from "react";
import BlogInfo from "./BlogInfo";

const blogDoc = [
  {
    name: "var vs let vs const",
    link:
      "https://mdshahariaryounusashik.medium.com/var-vs-let-vs-const-part-1-6e3539b40e15",
    id: 1,
    image: "https://i.ibb.co/5LnSmDj/kari-shea-1-SAnr-Ixw5-OY-unsplash.jpg",
  },
  {
    name: "Coming Soon ...",
    link: "#",
    id: 2,
    image:
      "https://i.ibb.co/sQQBt7r/glenn-carstens-peters-npx-XWg-Q33-ZQ-unsplash.jpg",
  },
  {
    name: "Coming Soon ...",
    link: "#",
    id: 3,
    image:
      "https://i.ibb.co/V2kJDPh/christian-wiediger-Wkf-Drhx-DMC8-unsplash.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="mt-5" id="blog">
      <h1 className="text-center">Blogs</h1>
      <div className="row">
        {blogDoc.map((blog) => (
          <BlogInfo key={blog.id} blog={blog}></BlogInfo>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

// https://mdshahariaryounusashik.medium.com/var-vs-let-vs-const-part-1-6e3539b40e15
