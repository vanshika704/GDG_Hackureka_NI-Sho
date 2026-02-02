
import SlayerFAQ from "../components/faqs";
import SlayerTimeline from "../components/timeline";

import Hero from "./Hero";
import PrizePool from "./PrizePool";
import CardGallery from "./ps"

function Home (){
    return <>
    <div className="h-max max-w-screen"><Hero/>
    <CardGallery/>
    <PrizePool/>
   <SlayerTimeline/>
   <SlayerFAQ/></div></>
}
export default Home ;