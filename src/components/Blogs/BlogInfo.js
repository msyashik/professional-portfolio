import React from "react";

const BlogInfo = (props) => {
  const { name, link, image } = props.blog;
  return (
    <div className="col-md-4 mt-3">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" style={{ color: "black" }}>
            {name}
          </h5>
          <div className="d-flex justify-content-center">
            <a
              href={link}
              style={{ backgroundColor: "rgb(0,38,66)" }}
              class="btn btn-primary px-5"
              target="blank"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
