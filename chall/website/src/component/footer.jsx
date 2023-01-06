import React from "react";
import App from "../App.css";

function Footer() {
  return (
    <div className="footer">
      <div className="line">
        <div className="lgo">
          <div className="tm">team</div>
          <div className="tseg"></div>
        </div>
        <div className="line1">Instagram</div>
        <div className="line1">Facebook</div>
        <div className="line1">Twitter</div>
        <div className="line1">Youtube</div>
        <div className="line1">Reddit</div>
        <div className="line1">GitHub</div>
      </div>
      <div className="line">
        <div className="title">Use Cases</div>
        <div className="line1">UI Design</div>
        <div className="line1">UX Design</div>
        <div className="line1">Prototyping</div>
        <div className="line1">Developing</div>
        <div className="line1">Front-End</div>
        <div className="line1">Software</div>
      </div>
      <div className="line">
        <div className="title">Explore</div>
        <div className="line1">Figma</div>
        <div className="line1">Customers</div>
        <div className="line1">Why I love Figma</div>
        <div className="line1">Illustrator</div>
        <div className="line1">InDesign</div>
        <div className="line1">Photoshop</div>
      </div>
      <div className="line">
        <div className="title">Resources</div>
        <div className="line1">Community recources Hub</div>
        <div className="line1">Support</div>
        <div className="line1">Education</div>
        <div className="line1">Team up</div>
        <div className="line1">Learning</div>
        <div className="line1">Read</div>
      </div>
      <div className="sub">
        <div>Subscribe to our newletter</div>
        <div className="btnn">
          <input type="text" className="inp" placeholder="Email" />
          <p className="arrow">➞</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
