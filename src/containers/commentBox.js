import React ,{useState} from 'react';
import CommentList from '../components/CommentList';

const CommentBox = () => {
    const [comments, setComments] = useState([

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
        <CommentList  Comments={comments} />
        </>
    )
}

export default CommentBox;