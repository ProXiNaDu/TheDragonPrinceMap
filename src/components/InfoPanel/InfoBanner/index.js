import React from "react";
import "./style.css";

class InfoBanner extends React.Component {
  render() {
    return (
      <img
        className="InfoBanner"
        src={this.props.img}
        alt="The Dragon Prince Banner"
        onLoad={this.props.onLoaded}
      />
    );
  }
}

export default InfoBanner;
