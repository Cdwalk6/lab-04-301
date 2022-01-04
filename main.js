import HornedBeasts from './hornedBeasts' ;
import React from "react";
import data from "./data.json";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css"
import Myform from './form';




const hornedBeastsArr = [...data];

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          hornData: data,
      };
    }
    
  filter = (e)=> {
    const numOfHorns = parseInt(e.target.value);
    let gallery = data;
    if (numOfHorns){
      gallery = data.filter((creature) => creature.horns === numOfHorns);
    }
    this.setState({hornData: gallery })
    console.log('filtering')
  };
  
  
    render() {
      return (
        <div id="beast-container">
        <Myform hornsFunc={this.filter}/>
          <Container>
            <Row>
            {hornedBeastsArr.map((hornedBeast) => {
            return (
              <Col>
              <HornedBeasts
                title={hornedBeast.title}
                imageUrl={UploadAndDisplayImage}
                description={hornedBeast.description}
                displayedModal={this.props.displayedModal}
              />
              </Col>
       );
      })}
            </Row>
          </Container>
        </div>
      );
    }
  }
          


    


export default Main;