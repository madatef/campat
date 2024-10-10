import Image from "next/image"

type ButtonProps = {
    type: 'submit' | 'button',
    label: string,
    variant: string,
    svg?: string
}
const Button = ({type, label, variant, svg}: ButtonProps) => {
  return (
    <button type={type} className={`${variant} rounded-full flexCenter gap-3 border`}>
      {svg && <Image src={svg} alt={label} width={25} height={25}/>}
      {label}
    </button>
  )
}

export default Button