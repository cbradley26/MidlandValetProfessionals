import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimony.css';

class Testimony extends Component {

    render() {

        const starStyle = {
            color: "gold"
        } 

        var generateStars = () => {
            let returnStars = [];
            for (let i = 0; i < this.props.star; i++) {
                returnStars.push(<FontAwesome key={i}
                    name='star'
                    style={starStyle}>
                </FontAwesome>);
            }
            return returnStars;
        }

        return (
            <div className="col-lg-4 mb-4">
                <Card className="mx-4">
                    <Card.Img variant="top" src={this.props.image}></Card.Img>
                    <Card.Title className="pl-3 pt-3">{this.props.reviewersName}</Card.Title>
                    <Card.Body>{this.props.comment}</Card.Body>
                    <Card.Footer>{generateStars()}</Card.Footer>   
                </Card>
            </div>
        );
    }
}

export default Testimony;