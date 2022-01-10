import React,{useState} from "react";

const CommentForm = () =>{

    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
   const handleAuthorChange = (event) =>{
       setAuthor(event.target.value)

   }
   const handleTextChange = (event) =>{
       setText(event.target.value);

   }

   const handleFormSubmit = (event) => {
    event.preventDefault()
    const authorToSubmit = author.trim()
    const textToSubmit = text.trim()
    if (!authorToSubmit || !textToSubmit){
        return
    }
    //Todo finish this part




    setAuthor("");
    setText("");

   }

return(
    <form>
        <input 
            type="text" 
            placeholder="Your name"
            value = {author}
            onChange={handleAuthorChange}

        />
        <input 
            type="text"
            placeholder="Say something"
            value = {text}
            onChange={handleTextChange}
         />
        
        <input 
             type="submit" 
             value="Post"
        
        />

    </form>
)
}

export default CommentForm;