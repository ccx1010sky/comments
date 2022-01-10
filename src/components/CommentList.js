import React from "react";
import Comment from "./Comment.js";

// comments is passing from commentBox.js
const CommentList = ({comments}) => {

    const commentNodes = comments.map(comment =>{
        return(
            <Comment author={comment.author} key={comment.id}> {comment.text} </Comment>
        )
    })
  return (
    <>
      <h3>comment List</h3>
      {/* hard coding  */}
      {/* <Comment author = "Rick Henry">React is so much fun</Comment>
      <Comment author = "Valerie Gibson">I am dreaming about react</Comment>  */}
      {commentNodes}
    </>
  );
};

export default CommentList;
