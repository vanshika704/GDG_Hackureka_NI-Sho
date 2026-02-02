import SlayerFAQ from "../components/faqs";
import SlayerTimeline from "../components/timeline";
import Hero from "./Hero";
import SlayerJudges from "./judges";
import PrizePool from "./PrizePool";
import CardGallery from "./ps";

function Home() {
  return (
    <div className="h-max max-w-screen">
<Hero />
      <section id="tracks">
        
        <CardGallery />
      </section>

      <section id="prize-pool">
        <PrizePool />
      </section>

      <section id="timeline">
        <SlayerTimeline />
      </section>

      <section id="judges">
        <SlayerJudges />
      </section>

      <section id="faqs">
        <SlayerFAQ />
      </section>

    </div>
  );
}

export default Home;
