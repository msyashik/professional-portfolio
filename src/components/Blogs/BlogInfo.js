import React from "react";

const BlogInfo = (props) => {
  const { name, link, image } = props.blog;
  return (
    <div className="col-md-4">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <a href={link} class="btn btn-primary">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
