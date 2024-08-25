import React from "react";
import "./Posts.css"

function PostsWrapper(props) {
  return (
    <div className="PostsWrapper bckColor border p-8 rounded-lg">
      {props.children}
    </div>
  );
}

export default PostsWrapper;
