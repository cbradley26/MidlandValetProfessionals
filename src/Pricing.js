import React, { Component } from 'react';
import PriceCard from './PriceCard';

class Pricing extends Component {

    render() {

        const bronzeList = [
            "Wheels deep cleaned inside-out using iron fallout remover with a variety of safe brushes.",
            "Tyre walls cleaned and arches flushed.",
            "Bodywork washed using snow foam then car shampooed using a three bucket method with a safe Gtechniq wash mitt.",
            "Drying wax sprayed on bodywork and dried using a soft micro fibre towel. ",
            "Wheels dried and dressed.",
            "Door shuts and sills cleaned."
        ];
        const silverList = ["Full Maintaince Wash", "magic sponge", "little bit of flem", "instagram worthy 100%"];
        const goldList = ["full scrub", "magic sponge", "little bit of flem", "instagram worthy 100%", "Smiles"];

        return (
            <div className="container mt-5">
                <div className="row  d-flex justify-content-center" >
                    <PriceCard package="Maintainence Wash" price="Starting From £20" subtitle="Detailed exterior wash to safely and thoroughly clean the exterior of the vehicle." perk={bronzeList}></PriceCard>
                    <PriceCard package="Silver" price="Starting From £35" perk={silverList}></PriceCard>
                    <PriceCard package="Gold" price="£70" perk={goldList}></PriceCard>
                </div>
            </div>
        );
    }

}



export default Pricing;