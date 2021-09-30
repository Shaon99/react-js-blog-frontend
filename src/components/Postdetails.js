import React ,{useEffect,useState} from 'react'
import "./post.css"

export default function Postdetails(props){
    const [data,setData]=useState([])
        useEffect( async ()=>{
         let result= await fetch("http://localhost:8000/posts/"+props.match.params.postId);
         result=await result.json();
         setData(result);     
        },[])


    function format(){
            var option={year:"numeric",month:'long',day:'numeric'}
            return new Date().toLocaleDateString([],option);
        }
    return(
    <div>
        <div className="container mt-3">
        <img  className="i" src={"https://shaon-blog.herokuapp.com/uploads/image/"+data.picture} alt=""/>  
        <p>{format(data.date)}</p>
        <h2 className="t">{data.title}</h2>
        <h4 className="d">{data.description}</h4>             
       </div>           
</div>
);
}
