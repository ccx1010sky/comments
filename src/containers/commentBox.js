import React ,{useState} from 'react';
import CommentList from '../components/CommentList';

const CommentBox = () => {
    const [comments, setComments] = useState([
        //this data could come from API or database.
        //hard coding data:
      {
        id: 1,
        author: "Rick Henry",
        text: "React is such a great framework!",
      },
      {
        id: 2,
        author: "Valerie Gibson",
        text: "I'm dreaming in React...",
      },
    ]);


    return(
        <>
            
        <h1>Comment Box</h1>
        <CommentList  comments={comments} />
        </>
    )
}

export default CommentBox;