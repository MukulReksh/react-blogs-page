import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>Welcome Home Fellow Travelller!</h1>
      <div className="About-intro">
        <img
          src="https://media.nomadicmatt.com/nomadicmattabout.jpg"
          alt="About-photos"
        />
        <p>
          Hi, I’m Nomadic Matt, a New York Times best-selling author of How to
          Travel the World on $50 a Day and Ten Years a Nomad as well as the
          founder of this website! Have you ever said to yourself one of the
          following: “How do I find the money to travel? It seems too expensive
          for me.” “Where do I find the best travel deals?” “How do I save money
          on flights, accommodation, and other big expenses?” “How do I plan my
          trip?” “How do I stay safe and healthy?” “How do I maximize my time?”
          “I want to travel more but I don’t know the first step.” You are not
          alone. Over the past eleven years, I’ve helped millions of people
          answer those questions and travel more for less with time tested and
          proven tips and advice.
        </p>
      </div>
      <div className="about-content">
        <p>
          By using this website, you can spend less time searching the Internet
          and being overwhelmed with information and more time doing the one
          thing you want to do: travel moreGrowing up in Boston, I was never a
          big traveler. It just wasn’t something my friends or family did. I
          didn’t take my first trip overseas until I was 23. After college, I
          got a job and the standard American two-weeks-a-year vacation. For
          that first trip in 2004, I went to Costa Rica. The experience changed
          my life. It opened me up to all the possibilities the world had to
          offer. There, I experienced another culture, wildlife I had only read
          about in books, new foods, got lost in a jungle, saw conservation
          projects in action, and met people from around the world. I was the
          captain of my own ship and every day was new and different. From that
          moment on, I was hooked on travel.
        </p>
      </div>
    </div>
  );
};

export default About;
