import React from "react";
import "./style.css";

class InfoPrimalSource extends React.Component {
  render() {
    return (
      <div className="InfoPrimalSource-overlay">
        <img
          className="InfoPrimalSource"
          src={this.props.img}
          alt="The Dragon Prince Primal Source"
          onLoad={this.props.onLoaded}
        />
      </div>
    );
  }
}

export default InfoPrimalSource;
