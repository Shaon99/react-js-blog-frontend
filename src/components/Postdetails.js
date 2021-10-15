import React ,{useEffect,useState} from 'react';
import "./post.css";
import * as moment from 'moment';
import axios from 'axios';



export default function Postdetails(props){

    const [comment,setComment]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
 
//getdata
    const [data,setData]=useState([''])
        useEffect( async ()=>{
         let result= await fetch("http://localhost:8000/posts/"+props.match.params.postId);
         result=await result.json();
         setData(result);     
        },[])


//getcommentdata
    const [allComment,setComments]=useState([''])
    useEffect( async ()=>{
     let result= await fetch("http://localhost:8000/posts/allcomment");
     result=await result.json();
     setComments(result);     
     console.log(result);
    },[])



//postdata
const submitData=(e)=>{
    e.preventDefault();
    let data={comment,name,email}

    axios({
        url:'posts/comment',
        method:'post',
        data:data
    }).then((result)=>{
        console.log("result",result);
    })

    document.getElementById("commentForm").reset();
}



    return(
    <div>
     <div className="container mt-3">
        <img  className="i" src={"http://localhost:8000/uploads/image/"+data.picture} alt=""/>  
        <p>{moment(data.date).format('LLLL')}</p>
        <h2 className="t">{data.title}</h2>
        <h4 className="d">{data.description}</h4>             

        <div className="mt-5 blogcomment">
            <h3>Comments</h3>
            {allComment.map(post => (
                <>
                  <h5>{post.name}</h5>
                  <p>{moment(data.date).format('LL')}</p>
                    <h6>{post.comment}</h6>
                </>      
            ))}
            </div>

   <div className="cardComment">
  <h6>Leave A Reply</h6>
  <small>Your email address will not be published. Required fields are marked *</small><br/>
  <form method = "POST" onSubmit={submitData} id="commentForm">
  <textarea  onChange={(e)=>setComment(e.target.value)} name="comment" id="" cols="50" rows="5" className="textc comments" placeholder="Comment*"></textarea><br/>

  <input  onChange={(e)=>setName(e.target.value)} type="text" className="name" name="name"  placeholder="Name*"/>
  <input  onChange={(e)=>setEmail(e.target.value)} type="text" className="email"  name="email" placeholder="Email*"/> <br/>
  <button type="submit" className="comment">Comment</button>
  </form>
        </div>

    </div>      
              
</div>
);
}
