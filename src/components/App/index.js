import React from "react";
import Map from "../Map";
import InfoPanel from "../InfoPanel";
import Loader from "../Loader";
import UserInterface from "../UserInterface";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      regions: {},
      strings: {},
      selectedRegion: null,
      zoom: 100,
    };
  }

  render() {
    const openRegionInfo = (e) => {
      this.setState({ selectedRegion: e.target.id });
    };
    const closeRegionInfo = (e) => {
      this.setState({ selectedRegion: null });
    };
    const zoomUp = () => {
      if (this.state.zoom >= 300) {
        return;
      }
      this.setState({ zoom: this.state.zoom + 10 });
    };
    const zoomDown = () => {
      if (this.state.zoom <= 100) {
        return;
      }
      this.setState({ zoom: this.state.zoom - 10 });
    };

    return (
      <React.Fragment>
        <UserInterface onZoomUp={zoomUp} onZoomDown={zoomDown} />
        <Map onRegionClick={openRegionInfo} zoom={this.state.zoom} />
        {this.state.regions[this.state.selectedRegion] && (
          <InfoPanel
            info={this.getRegionInfo(this.state.regions[this.state.selectedRegion])}
            onClose={closeRegionInfo}
            loader={<Loader />}
          />
        )}
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.loadDataFromJson("regions.json", "regions");
    this.loadDataFromJson("l10n-en.json", "strings");

    setTimeout(() => {
      this.scrollToCenter();
    }, 200);
  }

  loadDataFromJson(filename, state) {
    fetch(filename, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const result = {};
        result[state] = json;
        this.setState(result);
      });
  }

  getRegionInfo(region) {
    const regionInfo = {};
    const regionKeys = Object.keys(region);
    for (const key of regionKeys) {
      regionInfo[key] = this.state.strings[region[key]];
    }
    return regionInfo;
  }

  scrollToCenter() {
    const widthDiff =
      document.querySelector(".Map").width.baseVal.value -
      document.documentElement.clientWidth;
    const heightDiff =
      document.querySelector(".Map").height.baseVal.value -
      document.documentElement.clientHeight;
    window.root.scrollTo(widthDiff / 2, heightDiff / 2);
    window.scrollTo(widthDiff / 2, heightDiff / 2);
  }
}

export default App;
