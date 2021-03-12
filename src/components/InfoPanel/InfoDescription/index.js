import React from "react";
import "./style.css";

class InfoDescription extends React.Component {
  render() {
    return <p className={`InfoDescription ${this.props.isIndent ? "InfoDescription-indent" : ""}`}>{this.props.text}</p>;
  }
}

export default InfoDescription;
