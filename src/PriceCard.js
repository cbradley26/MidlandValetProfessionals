import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class PriceCard extends Component {

    render() {
        var perks = () => {
            let perksList = [];

            for (let i = 0; i < this.props.perk.length; i++) {
                perksList.push(<Card.Body key={i}><FontAwesome name='angle-right'></FontAwesome>  {this.props.perk[i]}</Card.Body>);
            }
            return perksList;
        }

        return (
            <div className="col-lg-4 mb-4">
                <Card>
                    <Card.Title className="mx-auto mt-3 ">{this.props.package}</Card.Title>

                    <h1 className="mx-auto text-center text-secondary">{this.props.price}</h1>
                    <hr />
                    <Card.Subtitle className="ml-3 mr-3">{this.props.subtitle}</Card.Subtitle>
                    <hr />
                    
                    <Card.Body>{perks()}</Card.Body> 
                    <Button variant="dark" className="ml-2 mr-2 mb-1 mt-1" href="#Contact">Enquire Now!</Button>
                    
                </Card>
            </div>);
    }

}



export default PriceCard;