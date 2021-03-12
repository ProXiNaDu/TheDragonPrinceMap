import React from "react";
import "./style.css";

class ReadMoreButton extends React.Component {
  render() {
    return (
      <a
        href={this.props.link}
        className="ReadMoreButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more <i className="fas fa-chevron-right"></i>
      </a>
    );
  }
}

export default ReadMoreButton;