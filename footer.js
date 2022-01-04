import React from 'react'


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Corey Walker",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

  
  export default Footer;