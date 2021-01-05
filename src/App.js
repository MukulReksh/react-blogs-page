import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import Menuimage from "./Components/Menuimage";
import BlogsCard from "./Components/Blogscard";
import Comments from "./Components/Comments";
import About from "./Components/About";
import Bottombar from "./Components/Bottombar";
import Contact from "./Components/Contact";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Menuimage} />
        <Route exact path="/blogs" component={BlogsCard} />
        <Route exact path="/posts/:id" component={Posts} />
        <Route exact path="/posts/:id/comments" component={Comments} />
        <Bottombar />
      </BrowserRouter>
    );
  }
}

export default App;
