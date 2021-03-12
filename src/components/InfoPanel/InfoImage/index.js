import React from "react";
import "./style.css";

class InfoImage extends React.Component {
  render() {
    return (
      <img
        className="InfoImage"
        src={this.props.img}
        alt="The Dragon Prince Screenshot"
        onLoad={this.props.onLoaded}
      />
    );
  }
}

export default InfoImage;
