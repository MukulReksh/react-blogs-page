import React from "react";
import "./Menuimg.css";
import Blogscard from "./Blogscard";

class Menuimage extends React.Component {
  render() {
    return (
      <div>
        <img
          className="menu-img"
          src="https://www.wallpaperback.net/wp-content/uploads/2018/06/Wallpaper%20windsurfing,%20sunset,%20sky,%20sea,%20waves,%20Sport%20263726985.jpg"
          alt="menuphoto"
        />
        <Blogscard />
      </div>
    );
  }
}

export default Menuimage;
