import React from "react";
import "./posts.css";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  state = { post: [] };
  componentDidMount() {
    console.log(this.props);
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ post: data }));
  }

  render() {
    const { post } = this.state;
    return (
      <>
        <div className="post-details">
          <h2>My current list of Best travel Blogs</h2>
          <img
            src="https://images.unsplash.com/photo-1447758501994-89bb4bae35d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="photos"
          />
          <div className="post-card">
            <h3>STAY UPDATED ON THE BEST TRAVEL TIPS!</h3>
            <img
              src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
              alt="phot1"
            />
            <p>
              Hi! I'm Nomadic Matt and I'm here to help you travel more for
              less.
            </p>
            <h5>
              Sign up to get my best travel tips as well as these free guides to
              help you plan your next trip like a pro:
            </h5>
            <ul>
              <li>Suggested packing list</li>
              <li>Impact travel tips</li>
              <li>Planning checklist</li>
              <li>Free flights</li>
            </ul>

            <div className="post-input ui huge input">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="post-input ui huge input">
              <input type="email" placeholder="Email ID" />
            </div>
            <button className="ui large black button">Submit</button>
          </div>
          <h1>{post.title}</h1>
          <p>
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
          </p>
          <Link to={"/posts/" + post.id + "/comments?postId=" + post.id}>
            Read Comments
          </Link>
        </div>
      </>
    );
  }
}

export default Posts;
