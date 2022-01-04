import "./app.css";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import data from "./data.json";
import SelectedBeast from "./selectedBeasts";
import UploadAndDisplayImage from "./uploadimg"





import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        allBeasts: data,
        displayModal: false,
        selectedBeast: {},
    }
  }

  displayedModal = (name) => {
   console.log("calling displayed modal in App.js")
    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({ selectedBeast, displayModal: true});
    console.log("called displayedModal")
}

  handleClose = () => {
    this.setState({displayModal:false})
  }
    render() {
    return (
      <div className="App-header">
        <Header />
        <UploadAndDisplayImage />
        <Main
        allBeasts={this.state.allBeasts} 
        displayedModal={this.displayedModal}
        />
        <SelectedBeast
        selectedBeast={this.state.selectedBeast}
        show={this.state.displayModal}
        handleClose={this.handleClose}
        />
        <Footer />
      </div>
    );
  }
}

export default App;