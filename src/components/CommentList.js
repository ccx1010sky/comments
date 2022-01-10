import React from "react";
import Comment from "./Comment.js";

const CommentList = () => {
  return (
    <>
      <h3>comment List</h3>
      <Comment author = "Rick Henry">React is so much fun</Comment>
      <Comment author = "Valerie Gibson">I am dreaming about react</Comment> 
    </>
  );
};

export default CommentList;
