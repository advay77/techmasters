"use client";

import { Marquee } from "../magicui/marquee";
import Image from "next/image";

const items = [
  {
    name: "Aaradhy Gaur",
    role: "Co-Founder",
    img: "/aaradhy.png",
    linkedin: "http://www.linkedin.com/in/aaradhygaur",
  },
  {
    name: "Tanish S.Pareek",
    role: "Co-Founder",
    img: "/tanish.png",
    linkedin: "http://www.linkedin.com/in/tanish-sunita-pareek",
  },
  {
    name: "Aryan Thacker",
    role: "Tech-Lead",
    img: "/aryan bhaiya.png",
    linkedin: "https://www.linkedin.com/in/aryan-thacker/",
  },
  {
    name: "Rashmi Arya",
    role: "Social Media Lead",
    img: "/rashmi.png",
    linkedin:
      "https://www.linkedin.com/in/rashmee-arya-369bb1285?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeHmclOQBR0uJXsIFNlkrTA%3D%3D",
  },
  {
    name: "Deependra Singh",
    role: "Content-Lead",
    img: "/ola.png",
    linkedin: "https://www.linkedin.com/in/kur-deependra-singh",
  },
  {
    name: "Palak Kumari",
    role: "Marketing Lead",
    img: "/palak.png",
    linkedin:
      "https://www.linkedin.com/in/palak-kumari-b855a521b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Nishtha Bhura",
    role: "PR Lead",
    img: "/nistha.png",
    linkedin:
      "https://www.linkedin.com/in/nistha-bhura-67aa54257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Shashank Jangid",
    role: "Design Lead",
    img: "/shashank.png",
    linkedin:
      "https://www.linkedin.com/in/shashank-jangid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Advay Anand",
    role: "Tech-Team",
    img: "/advay.png",
    linkedin: "https://www.linkedin.com/in/advay-anand-a89024277/",
  },
  {
    name: "Divyansh Goel ",
    role: "Tech-Team",
    img: "/mahak.png",
    linkedin: "https://www.linkedin.com/in/divyansh-goel-535522314/",
  },
  {
    name: "Poorva Gupta",
    role: "Tech-Team",
    img: "/poorva.png",
    linkedin: "https://www.linkedin.com/in/poorva-gupta-934a25222/",
  },
  {
    name: "Vishakha Pathak",
    role: "Social-Media Team",
    img: "/vishakha.png",
    linkedin: "https://www.linkedin.com/in/nikhilbakshi",
  },
  {
    name: "Shubhika Jain",
    role: "Social-Media Team",
    img: "/shubhika.png",
    linkedin: "https://www.linkedin.com/in/deepanshi-sharma",
  },
  {
    name: "Aarna Bhardwaj",
    role: "PR and Content-Team",
    img: "/aarna.png",
    linkedin: "https://www.linkedin.com/in/meghaverma",
  },
  {
    name: "Satyam Singh",
    role: "Content-Team",
    img: "/satyam.png",
    linkedin: "http://linkedin.com/in/satyam-singh-108486300",
  },
  {
    name: "Aditi Singh",
    role: "Content-Team",
    img: "/aditi.png",
    linkedin: "https://www.linkedin.com/in/aditi-singh-13686b24a",
  },
  {
    name: "Ujjwal Singh",
    role: "PR and Marketing Team",
    img: "/ujjwal.png",
    linkedin: "https://www.linkedin.com/in/ujjwal-agarwal-67b6a0323",
  },
  {
    name: "Kritika Sharma",
    role: "Design Team",
    img: "/kritika.png",
    linkedin:
      "https://www.linkedin.com/in/kritika-sharma-400b1930a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Sanskar Chaturvedi",
    role: "Design Team",
    img: "/sanskar.png",
    linkedin:
      "https://www.linkedin.com/in/sanskar-chaturvedi-4a558024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];


export const Team = () => {
  const firstRow = items.slice(0, items.length / 2);
  const secondRow = items.slice(items.length / 2);

  return (
    <div className="py-20 flex flex-col justify-center items-center">
      <div className="mt-8">
      <h3 className="text-[26px] smmin:text-[26px] sm:text-[26px] md:text-6xl font-bold text-gray-900 max-w-7xl pl-4 mx-auto">
      Team of Techmasters India
        </h3>
      </div>
      <div className="mt-2">
        <p className="text-gray-500 text-lg text-center">
          This is our impressive team of Techmasters community
        </p>
      </div>
      <div className="mt-10">
        <Marquee className="[--duration:15s]">
          {firstRow.map((payload, index) => (
            <CarouselCards key={index} imgUrl={payload.img} name={payload.name} />
          ))}
        </Marquee>
        <Marquee reverse className="mt-3 [--duration:15s]">
          {secondRow.map((payload, index) => (
            <CarouselCards key={index} imgUrl={payload.img} name={payload.name} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const CarouselCards = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
  return (
    <div className="w-60 h-60 flex justify-center items-center border-4 border-yellow-500 rounded-lg overflow-hidden">
      <Image
        className="rounded-lg object-cover"
        src={imgUrl}
        alt={`Image of ${name}`}
        width={240} // Fixed width
        height={240} // Fixed height
        loading="lazy"
      />
    </div>
  );
};