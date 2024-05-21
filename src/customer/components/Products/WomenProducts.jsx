
import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import { womenKurthi } from "../../Data/womenKurthi";
const WomenProducts=()=>{
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    // const items=womenKurthi.map((item)=><HomeSectionCard product={item}/>)
    const womenKurthiItems = womenKurthi.filter(item => item.title === "Women Kurthi");
    const shortTopsItems = womenKurthi.filter(item => item.title === "shortTops");
    const sareeItems = womenKurthi.filter(item => item.title === "sarees");

    const womenKurthiItemsData = womenKurthiItems.map((item)=><HomeSectionCard product={item}/>)
    const shortTopsItemsData = shortTopsItems.map((item)=><HomeSectionCard product={item}/>)
    const sareeItemsData = sareeItems.map((item)=><HomeSectionCard product={item}/>)
    return (
        
        <div>
            <AliceCarousel

            items={womenKurthiItemsData}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            responsive={responsive}
            />
            <AliceCarousel

items={shortTopsItemsData}
disableButtonsControls
autoPlay
autoPlayInterval={1000}
infinite
responsive={responsive}
/>
<AliceCarousel

            items={sareeItemsData}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            responsive={responsive}
            /> 
        </div>
    )
}
export default WomenProducts