



import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";

import { mensKurtha } from "../../Data/mensKurtha";
const MenProducts=()=>{
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const items=mensKurtha.slice(0,10).map((item)=><HomeSectionCard product={item}/>)
    return (
        
        <div>
            <AliceCarousel

            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            responsive={responsive}
            />
             <AliceCarousel

items={items}
disableButtonsControls
autoPlay
autoPlayInterval={1000}
infinite
responsive={responsive}
/>
<AliceCarousel

items={items}
disableButtonsControls
autoPlay
autoPlayInterval={1000}
infinite
responsive={responsive}
/>
        </div>
    )
}
export default MenProducts