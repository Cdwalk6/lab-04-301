import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'





class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfLikes: 0,
        };

        this.registerLike = this.registerLike.bind(this);
    }

    registerLike = () => {
        this.setState({ numberOfLikes: this.state.numberOfLikes + 1 });
        console.log("calling displayed modal in hornedbeast.js")
        this.props.displayedModal(this.props.title);
        console.log("called displayed modal in hornedbeast")
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={this.props.imageUrl}
                                alt={this.props.title}
                                width="30%"
                                onClick={this.registerLike.bind(this)}
                            />
                            <Card.Body>

                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>{this.props.description}</Card.Text>
                                <span> 💖 = {this.state.numberOfLikes}</span>
                            </Card.Body>
                            <Card.Body>
                                <Card.Footer>

                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

};

export default HornedBeasts;