import React from "react";
import InfoTitle from "./InfoTitle";
import InfoDescription from "./InfoDescription";
import InfoImage from "./InfoImage";
import InfoBanner from "./InfoBanner";
import InfoPrimalSource from "./InfoPrimalSource";
import CloseInfoPanelButton from "./CloseInfoPanelButton";
import { CSSTransition } from "react-transition-group";
import ReadMoreButton from "./ReadMoreButton";
import "./style.css";

class InfoPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      imageLoaded: false,
      bannerLoaded: !props.info.bannerImage,
      primalSourceLodaded: !props.info.primalSourceImage,
    };
  }

  render() {
    const onOverlayClick = (e) => {
      if (!e.target.classList.contains("InfoPanel-overlay")) {
        return;
      }
      this.props.onClose(e);
    };

    return (
      <CSSTransition
        classNames="InfoPanel-appear"
        timeout={0}
        in={this.state.mounted}
      >
        <div className="InfoPanel-overlay" onClick={onOverlayClick}>
          {(!this.state.imageLoaded ||
            !this.state.bannerLoaded ||
            !this.state.primalSourceLodaded) &&
            this.props.loader}
          <div
            className={`InfoPanel ${
              !this.state.imageLoaded ||
              !this.state.bannerLoaded ||
              !this.state.primalSourceLodaded
                ? "InfoPanel-hidden"
                : ""
            }`}
          >
            <CloseInfoPanelButton onClose={this.props.onClose} />
            <InfoImage
              img={this.props.info.image}
              onLoaded={() => this.setState({ imageLoaded: true })}
            />
            <div className="InfoPanel-content">
              {this.props.info.bannerImage && (
                <InfoBanner
                  img={this.props.info.bannerImage}
                  onLoaded={() => this.setState({ bannerLoaded: true })}
                />
              )}
              {this.props.info.primalSourceImage && (
                <InfoPrimalSource
                  img={this.props.info.primalSourceImage}
                  onLoaded={() => this.setState({ primalSourceLodaded: true })}
                />
              )}
              <InfoTitle text={this.props.info.title} />
              <InfoDescription
                text={this.props.info.description}
                isIndent={!!this.props.info.bannerImage}
              />
              <ReadMoreButton link={this.props.info.wikiPageLink} />
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }
}

export default InfoPanel;
