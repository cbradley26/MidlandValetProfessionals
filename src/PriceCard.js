import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class PriceCard extends Component {

    render() {
        var perks = () => {
            let perksList = [];

            for (let i = 0; i < this.props.perk.length; i++) {
                perksList.push(<Card.Body key={i}>{this.props.perk[i]}</Card.Body>);
            }
            return perksList;
        }

        return (
            <div className="col-md-4 mb-4">
                <Card >
                    <Card.Title>{this.props.package}</Card.Title>
                    <h1>{this.props.price}</h1>
                    <hr />
                    <Card.Subtitle>{perks()}</Card.Subtitle> 
                </Card>
            </div>);
    }




}



export default PriceCard;