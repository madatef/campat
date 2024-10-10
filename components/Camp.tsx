"use client"
import { CAMPS, PEOPLE_URL } from "@/constants"
import Image from "next/image"

export const Camp = () => {
  const campsUI = CAMPS.map(camp => {
    return(
      <div className={`h-full w-full min-w-[1100px] bg-${camp.img} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}  key={camp.camp + camp.location + camp.joined}>
        <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
          <div className="flexCenter bg-gray-20 rounded-full pr-4 bg-opacity-40 gap-4">
              <div className="rounded-full bg-green-50 p-4">
                <Image src="/folded-map.svg" alt="map" width={28} height={28} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="bold-18 text-black">{`${camp.camp} Camp`}</h4>
                <p className="refular-14 text-black">{camp.location}</p>
              </div>
          </div>


          <div className="flexCenter bg-gray-20 rounded-full pr-4 bg-opacity-40 gap-6">
                <span className="flex -space-x-4 overflow-hidden">
                  {
                    PEOPLE_URL.map(person => {
                      return(
                        <Image key={camp.camp + camp.location + camp.joined + person} src={person} alt="person" width={52} height={52} className="inline-block h-10 w-10 rounded-full" />
                      )}
                    )
                  }
                </span>
                <p className="bold-16 md:bold-20 text-black">{`${camp.joined}+ Joined`}</p>
              </div> 
         
        </div>
      </div>
    )
  })
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        {
          campsUI
        }
      </div>

      <div className="flexEnd flex mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative overflow-hidden rounded-3xl w-full">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
              <strong>Feeling Lost </strong> 
                and not knowing the way?
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-justify text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location,
            the possibility of getting lost is very large. 
            That's why we are here for those of you who want to start an adventure!
            </p>
            <Image src="/quote.svg" alt="camp-2" width={140} height={165} className="camp-quote" />
          </div>
      </div>
    </section>
  )
}
export default Camp
