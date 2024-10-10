import Link from "next/link"
import Image from "next/image"
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className='flex flex-col gap-14 padding-container w-full max-container'>
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <Link href="/" className='mb-10'>
              <Image src='/campat.svg' alt='logo' width={160} height={160}/>
            </Link>

            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              
              
              {
                FOOTER_LINKS.map((link, i) => {
                  return (
                    <div key={i + link.links[0]} className="flex flex-col gap-5">
                      <div>
                        <h4 className="bold-18 whitespace-nowrap">{link.title}</h4>
                      </div>
                      <div className="flex flex-col gap-4 text-gray-30">
                        {link.links.map(link => <Link href='/' key={link} className='block'>{link}</Link>)}
                      </div>
                    </div>
                  )
                })
              }



              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="bold-18 whitespace-nowrap">{FOOTER_CONTACT_INFO.title}</h4>
                </div>
                <div className="flex flex-col gap-5">
                  {
                  FOOTER_CONTACT_INFO.links.map(link => {
                    return (
                      <Link key={link.label} href='/' className="flex gap-4 md:flex-col lg:flex-row">
                        <p>{link.label}</p>
                        <p>{link.value}</p>
                      </Link>

                    )
                  })
                }
                </div>
              </div>



              <div className="flex flex-col gap-5">
                <h4 className="bold-18 whitespace-nowrap">{SOCIALS.title}</h4>
                <div id="contacts" className="flex items-start gap-3">
                  {
                    SOCIALS.links.map(link =>{
                      return(
                        <Image key={link} src={link} alt={link.slice(1, link.length-4)} width={24} height={24}/>
                      )
                    })

                  }
                </div>
                
              </div>



          
            </div>
        </div>
        <div className="w-full bg-gray-20 border"></div>
          <p className=" regular-14 w-full text-center text-gray-30">2024 CAMPAT | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer