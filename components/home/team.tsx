"use client";

import { Marquee } from "../magicui/marquee";
import Image from "next/image"; // Import Image from next/image

const items = [
    {
      imageUrl: "https://picsum.photos/seed/alpha/400/300",
      name: "Alpha"
    },
    {
      imageUrl: "https://picsum.photos/seed/bravo/400/300",
      name: "Bravo"
    },
    {
      imageUrl: "https://picsum.photos/seed/charlie/400/300",
      name: "Charlie"
    },
    {
      imageUrl: "https://picsum.photos/seed/delta/400/300",
      name: "Delta"
    },
    {
      imageUrl: "https://picsum.photos/seed/echo/400/300",
      name: "Echo"
    },
    {
      imageUrl: "https://picsum.photos/seed/foxtrot/400/300",
      name: "Foxtrot"
    },
    {
      imageUrl: "https://picsum.photos/seed/golf/400/300",
      name: "Golf"
    },
  ];

  
  const firstRow = items.slice(0, items.length / 2);
  const secondRow = items.slice(items.length / 2);

export const Team = ()=>{
    return <div className="py-20 flex flex-col justify-center items-center">
        <div>
            <button className="rounded-full py-2 px-8 text-white bg-yellow-400">Our Team</button>
        </div>
        <div className="mt-8">
            <h3 className="text-3xl md:text-7xl font-bold">Team of Techmasters India</h3>            
        </div>
        <div className="mt-6">
            <p className="text-gray-500 text-sm ">This is our impressive team of Techmasters community</p>
        </div>
        <div className="mt-10">
            <Marquee  className="[--duration:15s]">
                {firstRow.map((payload)=>{
                    return <CarouselCards key={payload.name} height={30} width={30} imgUrl={payload.imageUrl} name={payload.name}/>
                })}
            </Marquee>
            <Marquee reverse  className="mt-3 [--duration:15s]">
                {secondRow.map((payload)=>{
                    return <CarouselCards key={payload.name} height={30} width={30} imgUrl={payload.imageUrl} name={payload.name}/>
                })}
            </Marquee>
        </div>
    </div>
}


const CarouselCards = ({imgUrl,name,height,width}:{imgUrl:string,name:string,height:number,width:number})=>{
    return <div>
        <Image 
            className={`rounded-lg border-2 border-yellow-500`} 
            src={imgUrl} 
            alt={name} 
            width={width * 10} // Adjusted width for Next.js Image
            height={height * 10} // Adjusted height for Next.js Image
        />
    </div>
}