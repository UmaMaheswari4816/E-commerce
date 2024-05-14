import React from "react";
import { HomeCarosalData } from "./HomeCarosalData";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const HomeCarosal=()=>{
    const items = HomeCarosalData.map((item)=><img width="100%" className="cursor-pointer" role="presentation" src={item.image} alt=""/>)
    return(
        <AliceCarousel

        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
  
    />
    )
}
export default HomeCarosal