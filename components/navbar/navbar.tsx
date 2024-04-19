import Image from "next/image"
import Logo from "@/public/images/logo.svg"

export function NavBar() {
  return (
    <header>
      <div className="flex items-center space-x-0 bg-black justify-center py-8">
        <Image alt="Logo" src={Logo} />
      </div>
      <div className="max-w-7xl m-auto px-2">
        <h1 className="flex flex-col text-4xl uppercase font-bold mt-14">
          Reabertura <span>Smart fit</span>
        </h1>
        <hr className="border-2 border-black my-6 w-14" />
        <p className="font-medium text-justify">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </div>
    </header>
  )
}
