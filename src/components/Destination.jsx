import React from "react";
import DestinationCard from "../layouts/DestinationCard";
import img1 from "../assets/dest1.jpg";
import img2 from "../assets/dest2.jpg";
import img3 from "../assets/dest3.jpg";

export default function Destination() {
  return (
    <div className="min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className="font-medium text-center text-4xl lg:mt-0 mt-16">
        Most Popular Destinations
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 mt-14">
        <DestinationCard
          img={img1}
          title="Paris, France"
          para="Paris offers iconic landmarks like the Eiffel Tower and world-class art at the Louvre Museum."
        />
        <DestinationCard
          img={img2}
          title="Dubai, UAE"
          para="A city of superlatives, Dubai boasts towering skycrapers, luxury shopping, and desert adventures."
        />
        <DestinationCard
          img={img3}
          title="Venice, Italy"
          para="Explore the romantic canals and historic architecture of Venice, a city built on water."
        />
      </div>
    </div>
  );
}
