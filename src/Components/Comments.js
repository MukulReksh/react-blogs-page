import React from "react";
import "./Comments.css";

class Comments extends React.Component {
  state = { comments: [] };
  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ comments: data }));
  }
  render() {
    const { comments } = this.state;
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="ui comment">
            <a href="/" className="avatar">
              <img
                className="ui avatar"
                src="https://www.jvmpolytechnic.in/assets/upload/grid_img/12576_1.jpg"
                alt="comment"
              />
            </a>
            <div className="content">
              <h5>{comment.name}</h5>
              <p>{comment.email}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
