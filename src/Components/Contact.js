import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="ui container">
      <h1>Contact</h1>
      <p>Looking to get in touch? Great! I love reader mail!</p>
      <p>
        However, as this website has grown, e-mail has gotten so out of control
        (over 300 per day!!) that I first must ask you to read the following
        guidelines before sending us a message. While I hate to restrict email
        and the help I can offer, the more time I’m sitting in front of my
        computer, the less time I’m out finding information to help you travel!
      </p>
      <h2>Before sending me an email, please read the following guidelines:</h2>
      <ul>
        <p>
          <li>
            If you are looking for general destination information, please visit
            my destination guides or use the search bar on the top right of the
            navigation bar. Basic information on what to see, do, and how much
            things cost in a place can be found throughout the site. Emails that
            ask “what should I do in [x]?” will simply go unresponded.
          </li>
        </p>
        <p>
          <li>
            If you are e-mailing me about visa questions related to my European
            visa article, please contact an embassy or consulate. I can’t
            comment on individual situations.
          </li>
        </p>
        <p>
          <li>
            If you wondering where you should start on planning your trip or
            feeling lost, use the start here link on the top left of the
            navigation bar. That’s the best place to begin using this
            website.I’m not a travel agency and can’t help you book your trip.
            Emails asking me to book your trip will be deleted.
          </li>
        </p>
        <p>
          <li>
            I love itineraries but planning them is a very personal process. My
            advice is always to simply avoid doubling back and move in one
            direction! For what places to go and thing to see, only you can
            answer that. Itinerary feedback will also go unresponded.
          </li>
        </p>
      </ul>
      <div className="contact-query">
        <h2>
          Kindly fill out the below details in order to get in touch with us!
        </h2>
        <form className="ui form">
          <div className="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
          <div className="field">
            <label>Email Id</label>
            <input type="email" name="email" placeholder="Enter your Emaild" />
          </div>
          <div className="field">
            <label>Contact Number</label>
            <input
              type="number"
              name="Phone"
              placeholder="Enter your mobile number"
            />
          </div>
          <div class="field">
            <label>Enter your Query</label>
            <textarea rows="2"></textarea>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button className="ui black button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
