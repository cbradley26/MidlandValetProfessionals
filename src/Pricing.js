import React, { Component } from 'react';
import PriceCard from './PriceCard';
import './pricing.css';

class Pricing extends Component {

    render() {

        const prices = [
            {
                "name": "Maintenance Wash",
                "subtitle": "Detailed exerior wash to safely and thoroughly clean the exterior of the vehicle",
                "price": "Starting from £20",
                "details": [
                    "Wheels deep cleaned inside-out using iron fallout remover with a variety of safe brushes.",
                    "Tyre walls cleaned and arches flushed.",
                    "Bodywork washed using snow foam then car shampooed using a three bucket method with a safe Gtechniq wash mitt.",
                    "Drying wax sprayed on bodywork and dried using a soft micro fibre towel. ",
                    "Wheels dried and dressed.",
                    "Door shuts and sills cleaned."
                ]
            },
            {
                "name": "Maintenance Valet",
                "subtitle": "The maintenance valet is suited for vehicles as a regular valet service to keep your vehicle in excellent condition all year round.",
                "price": "Starting from £35",
                "details": [
                    "Maintaince Wash",
                    "Interior dusted and thoroughly vacuumed including boot",
                    "Interior windows, glass and dials cleaned",
                    "Air freshner applied",
                    "Paint sealant applied as a top up for gloss and protection"
                ]
            },
            {
                "name": "Level 1 Detail",
                "subtitle": "The level 1 details is suited for vehicles that don't require deep interior cleaning.",
                "price": "Starting from £45",
                "details": [
                    "Maintenance Valet",
                    "Hard surfaces cleaned using interior cleaner (plastics, dashboard, centre console, door cards, drinks holders, foot pedals etc...",
                    "Floor mats cleaned and hoover extracted (wet vac reccomended for heavily soiled)"
                ]
            },
            {
                "name": "Level 2 Detail",
                "subtitle": "The level 2 detail is suited for vehicles in need of further attention to the interior/deeper cleaning.",
                "price": "Starting from £60",
                "details": [
                    "Level 1 detail",
                    "Fabric seats and carpet cleaned and hoover extracted. (Wet vac reccomended for heavily stained upholstery)",
                    "Leather seats and other leather areas cleaned and conditioned.",
                    "Dashboard and plastics dressed with Matt finish protectant",
                    "Coat of wax applied to paintwork"
                ]
            },
            {
                "name": "Level 3 Detail",
                "subtitle": "The level 3 detail is my equivalent to a full inside-out valet for a professional showroom finish",
                "price": "Starting from £85",
                "details": [
                    "Level 2 detail",
                    "Tar deposits chemical led removed from paintwork.",
                    "Paintwork clay barred to remove from all final surface decontamination.",
                    "Paintwork hand polished",
                    "Paintwork waxes using a ceramic wax for the highest level of durability of protection.",
                    "Windows polished to a high standard",
                    "Exhaust tips cleaned and polished"
                ]
            }]

        var pricings = () => {
            let priceList = [];

            for (let i = 0; i < prices.length; i++) {
                if (i === 2) {
                    priceList.push(<div className="divider"></div>)
                }
                
                priceList.push(<PriceCard package={prices[i].name}
                    price={prices[i].price}
                    subtitle={prices[i].subtitle}
                    perk={prices[i].details}></PriceCard>);
            }
            return priceList;
        }

        return (
            <div className="container mt-5">
                <div className="row  d-flex justify-content-center" >
                    {pricings()}
                </div>
            </div>
        );
    }

}



export default Pricing;