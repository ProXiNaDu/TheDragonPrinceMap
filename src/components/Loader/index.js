import React from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {mounted: false};
  }

  render() {
    return (
      <CSSTransition
        classNames="Loader-appear"
        timeout={0}
        in={this.state.mounted}
      >
        <div className="Loader-overlay">
          <div className="Loader-bar"></div>
          <div className="Loader-bar"></div>
          <div className="Loader-bar"></div>
        </div>
      </CSSTransition>
    );
  }

  componentDidMount() {
    this.setState({mounted: true});
  }
}

export default Loader;
