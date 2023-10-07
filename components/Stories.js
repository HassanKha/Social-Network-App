import React from "react";
import Image from "next/image";
import StoryCard from "../components/StoryCard"

const stories = [
  {
    name: "Alexa Bless",
    src: "https://metro.co.uk/wp-content/uploads/2022/07/Alexa-Bliss-WWE-Raw-bb9b-e1671617936861.jpg?quality=90&strip=all&crop=82px%2C16px%2C877px%2C460px&resize=1200%2C630",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Mandy Rose",
    src: "https://www.usanetwork.com/sites/usablog/files/styles/scale_1280/public/2023/01/wwe-mandy-rose-update.jpg",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Trish Stratus",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXuf-WgZsEIqM5eVIWmyGH4A7sCCb1Qy4lrfpvhZIDFCyW0fkQGAgVguVkBkB9Qv-cIU&usqp=CAU",
    profile: "https://links.papareact.com/l4v",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      
      {stories.map((story) => 
     

<StoryCard key={story.src} src={story.src} profile={story.profile} name={story.name} />

)}
    </div>
  );
}

export default Stories;
