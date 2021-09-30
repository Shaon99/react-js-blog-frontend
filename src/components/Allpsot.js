import React, { Component } from 'react'
import axios from "axios";
import "./post.css";
import {Link} from "react-router-dom";
import HomeCarousel from './HomeCarousel';
export default class Allpsot extends Component {
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('posts')
        .then((response)=> {
          this.setState({posts:response.data})
        })
        .catch((error)=> {
          // handle error
          console.log(error);
        })
       }

    render() {
        
        return (            
            <div>
                 <HomeCarousel/>               
                    <div className="girds">
                    {this.state.posts.map(post=>
                <div className="cards">
                 <Link to={"/details/"+post._id} style={{textDecoration:"none"}}>
                 <img className='boximg' src={"https://shaon-blog.herokuapp.com/uploads/image/"+post.picture} alt=""/>  
                    <h2>{post.title}</h2>
                    <h4>{post.description}</h4>              
               </Link>        

               </div>
                
              )}
        </div>
</div>
        )
    }
}
