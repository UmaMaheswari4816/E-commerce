import React from "react";
import MainCarousel from "../../components/homeCarosal/HomeCarosal";
import HomeSectionCarosal from "../../components/HomeSectionCarosal/HomeSectionCarosal";
import { mensKurtha } from "../../Data/mensKurtha";
import { womenKurthi } from "../../Data/womenKurthi";
import { kidsCloths } from "../../Data/kidsCloths";
const HomePage=()=>{
    return(
        <div>
            <MainCarousel/>
            <div className="space-y-10 py-20">
                <HomeSectionCarosal data={mensKurtha}/>
                <HomeSectionCarosal data={womenKurthi}/>
                <HomeSectionCarosal data={kidsCloths}/>
    
                
            </div>
      

        </div>
    )
}
export default HomePage