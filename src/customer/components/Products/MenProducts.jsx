
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
    //const items=mensKurtha.slice(0,20).map((item)=><HomeSectionCard product={item}/>)

    const menKurthaItems = mensKurtha.filter(item => item.title === "VK EMBRODRY MENS KURTA");
    const jacketItems = mensKurtha.filter(item => item.title === "jackets");
    const shirtItems = mensKurtha.filter(item => item.title === "shirts");

    const menKurthaItemsData = menKurthaItems.map((item)=><HomeSectionCard product={item}/>)
    const jacketItemsData = jacketItems.map((item)=><HomeSectionCard product={item}/>)
    const shirtItemsData = shirtItems.map((item)=><HomeSectionCard product={item}/>)


    return (
        
        <div>
            <AliceCarousel

            items={menKurthaItemsData }
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            responsive={responsive}
            />
             <AliceCarousel

items={jacketItemsData }
disableButtonsControls
autoPlay
autoPlayInterval={1000}
infinite
responsive={responsive}
/>
<AliceCarousel

items={shirtItemsData}
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