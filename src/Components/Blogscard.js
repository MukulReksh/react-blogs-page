import React from "react";
import "./Blogscard.css";
import { Link } from "react-router-dom";

class Blogscard extends React.Component {
  state = { card: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ card: data }));
  }

  render() {
    return (
      <div className="blogs-card">
        {this.state.card.map((cards) => (
          <div className="ui card" key={cards.id}>
            <img
              className="ui image"
              src="https://yallabook.com/blog/uploade/files/190904_907d62bd4b.jpg"
              alt={cards.title}
            />
            <h4>{cards.title}</h4>
            <div>
              <Link to={"/posts/" + cards.id}>
                <button className="ui right floated black button">
                  View details
                </button>
              </Link>
            </div>
            <div className="extra content">
              <div className="ui large transparent left icon input">
                <i className="heart outline icon"></i>
                <input type="text" placeholder="Add Comment..." />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Blogscard;
