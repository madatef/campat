import Image from "next/image"
import Button from "./Button"

const Cta = () => {
  return (
    <section className="flexCenter flex-col w-full pb-[100px]">
      <div className="get-app">
        <div className="flex flex-col justify-center gap-12 items-start w-full flex-1 z-30">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row">
            <Button type="button" label="App Store" variant="btn_white" svg="/apple.svg" />
            <Button type="button" label="Play Store" variant="btn_dark_green_outline" svg="/android.svg" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image className="color-transparent" src="/phones.png" alt="phones" width={315} height={370} />
        </div>
      </div>
    </section >
  )
}

export default Cta