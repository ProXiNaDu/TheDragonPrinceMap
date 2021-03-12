import React from "react";
import "./style.css";

class InfoTitle extends React.Component {
  render() {
    return <h2 className="InfoTitle">{this.props.text}</h2>;
  }
}

export default InfoTitle;
