import React, { Component } from 'react';
import PriceCard from './PriceCard';

class Pricing extends Component {

    render() {

        const bronzeList = ["full scrub", "magic sponge", "little bit of flem"];
        const silverList = ["full scrub", "magic sponge", "little bit of flem", "instagram worthy 100%"];
        const goldList = ["full scrub", "magic sponge", "little bit of flem", "instagram worthy 100%", "Smiles"];

        return (
            <div className="container mt-5">
                <div className="row  d-flex justify-content-center" >
                    <PriceCard package="Bronze" price="£30" perk={bronzeList}></PriceCard>
                    <PriceCard package="Silver" price="£50" perk={silverList}></PriceCard>
                    <PriceCard package="Gold" price="£70" perk={goldList}></PriceCard>
                </div>
            </div>
        );
    }

}



export default Pricing;