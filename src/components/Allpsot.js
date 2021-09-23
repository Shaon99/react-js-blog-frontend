import React, { Component } from 'react'
import axios from "axios";
import "./post.css";
import {Link} from "react-router-dom";

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
                <h1 className="post">Content</h1>
                    <div className="gird">
                    {this.state.posts.map(post=>
                    <Link to={"/details/"+post._id} style={{textDecoration:"none"}}>
                <div className="card">
                    <h2>{post.title}</h2>
                    <h4>{post.description}</h4>
                </div></Link>
                
              )}
        </div>
</div>
        )
    }
}
