import React from "react";

const CommentForm = () =>{
return(
    <form>
        <input 
            type="text" 
            placeholder="Your name"

        />
        <input 
            type="text"
            placeholder="Say something"
         />
        
        <input 
             type="submit" 
             value="Post"
        
        />

    </form>
)
}

export default CommentForm;