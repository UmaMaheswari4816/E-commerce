
import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";

import { kidsCloths } from "../../Data/kidsCloths";
const KidsProducts=()=>{
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    //const items=kidsCloths.slice(0,10).map((item)=><HomeSectionCard product={item}/>)

    const girlItems = kidsCloths.filter(item => item.title === "girl");
    const fashionItems = kidsCloths.filter(item => item.title === "fashion");
    const boyItems = kidsCloths.filter(item => item.title === "boy");

    const girlItemsData = girlItems.map((item)=><HomeSectionCard product={item}/>)
    const fashionItemsData = fashionItems.map((item)=><HomeSectionCard product={item}/>)
    const boyItemsData = boyItems.map((item)=><HomeSectionCard product={item}/>)
    return (
        
        <div>
            <AliceCarousel

            items={girlItemsData}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            responsive={responsive}
            />
             <AliceCarousel

items={fashionItemsData}
disableButtonsControls
autoPlay
autoPlayInterval={1000}
infinite
responsive={responsive}
/>
<AliceCarousel

items={boyItemsData }
disableButtonsControls
autoPlay
autoPlayInterval={1000}
infinite
responsive={responsive}
/>
        </div>
    )
}
export default KidsProducts
