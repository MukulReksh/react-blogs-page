import React from "react";
import "./bottombar.css";

const Bottombar = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-heading">
            <h2>About Us</h2>
            <hr />
          </div>
          <ul>
            <li>About Matt</li>
            <li>Copyright</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
            <li>Write for Us</li>
          </ul>
        </div>
        <div className="footer-content-1">
          <div className="footer-heading-1">
            <h2>Travel Tips</h2>
            <hr />
          </div>
          <ul>
            <li>Start Here</li>
            <li>Travel Blogs</li>
            <li>Destination Guide</li>
            <li>Overseas Teaching</li>
            <li>Guidebooks</li>
          </ul>
        </div>
        <div className="footer-content-2">
          <div className="footer-heading-2">
            <h2>Community</h2>
            <hr />
          </div>
          <ul>
            <li>Forms & Events</li>
            <li>Book Club</li>
            <li>Patryon</li>
            <li>Flyte</li>
            <li>Blogging Course</li>
          </ul>
        </div>
        <div className="footer-content-3">
          <div className="footer-heading-3">
            <h2>Book Your Trip</h2>
            <hr />
          </div>
          <ul>
            <li>Accommodation</li>
            <li>Cheap Flights</li>
            <li>Travel Insurance</li>
            <li>Travel credit cards</li>
            <li>Favorite Companies</li>
          </ul>
        </div>
        <div className="footer-content-4">
          <div className="footer-heading-4">
            <h2>Search</h2>
            <hr />
          </div>
          <ul>
            <div className="bottom-search ui input">
              <input type="text" placeholder="Serach Site Here..." />
            </div>

            <h2>Follow me on the Web!</h2>
            <hr />
            <div className="icons-bottom">
              <li>
                <i class="huge facebook icon"></i>
              </li>
              <li>
                <i class="huge twitter square icon"></i>
              </li>

              <li>
                <i class="huge instagram icon"></i>
              </li>
              <li>
                <i class="huge youtube icon"></i>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="copyrights-footer">
        <p>@2020 Mukul React Copyrights!</p>
      </div>
    </>
  );
};

export default Bottombar;
