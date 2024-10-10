import { FEATURES } from "@/constants"
import Image from "next/image"

const Features = () => {
  return (
    <section className="flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src="/phone.png" alt="phone" width={440} height={1000} className="feature-phone" />
        </div>

        <div className="z-50 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {
              FEATURES.map(el => {
                return(
                  <li key={el.title} className="flex w-full flex-1 flex-col items-start">
                    <div className="rounded-full p-4 lg:p-7 bg-green-50">
                      <Image src={el.icon} alt={el.icon.slice(1, el.icon.length -3 )} width={28} height={28} />
                    </div>
                    <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                        {el.title}
                    </h2>
                    <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                      {
                        el.description
                      }
                    </p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features