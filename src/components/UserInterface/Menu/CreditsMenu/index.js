import React from "react";
import "./style.css";

class CreditsMenu extends React.Component {
  render() {
    return (
      <div className="CreditsMenu">
        <p>
          All images are copyrighted by{" "}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://wonderstorm.net/"
          >
            Wonderstorm
          </a>{" "}
          or associates. They will be used in a way that qualifies as fair use
          under US copyright law.
        </p>
        <p>Special thanks to The Dragon Prince Community, who helped with collecting information and screenshots for this map.</p>
        <p>
          This interactive map made by{" "}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://github.com/ProXiNaDu"
          >
            Proxinadu
          </a>
        </p>
        <p>
          Copyright © 2021{" "}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://github.com/ProXiNaDu"
          >
            Proxinadu
          </a>
          . All rights reserved.
        </p>
      </div>
    );
  }
}

export default CreditsMenu;
