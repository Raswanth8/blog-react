import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Shaw')
    const [isLoading,setisLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title,body,author}

        setisLoading(true)
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
        setisLoading(false)
      console.log('New blog added');
      //history.go(-1)
      history.push('/')
    },1000)
        })
        
  }

    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog Title :</label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <label >Blog Body :</label>
                <textarea required  value ={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Wriiten By :</label>
                <select required  value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Shaw">Shaw</option>
                    <option value="Root">Root</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;