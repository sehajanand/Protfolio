import React from "react";
import "./Contactbox.css";

export default function Contactbox() {
  return (
    <div className="contact-box">
      {" "}
      <em>Sehaj Anand</em> <br />
      <address>
        Hno 50, Lane No 4A <br /> Anand Nagar, Talab Tillo, Jammu, J/k
      </address>{" "}
      <a href="tel:9682141640" className="contact-links">9682141640</a>
      <br />{" "}
      <a href="mailto:sehajanand.321@gmail.com" className="contact-links">
        sehajanand.321@gmail.com
      </a>{" "}
      <ul>
        <li>
          <a href="https://discord.gg/VnESj94tGg">
            <img src={require("../../Assets/dc.jpg")} alt="dc" />
          </a>
        </li>
        <li>
          <a href="https://github.com/sehajanand">
            <img src={require("../../Assets/github.png")} alt="insta" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100078141782671">
            <img src={require("../../Assets/facebook.png")} alt="fb" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sehaj-anand-67aa35219/">
            <img src={require("../../Assets/linkden.png")} alt="linkden" />
          </a>
        </li>
      </ul>{" "}
    </div>
  );
}
