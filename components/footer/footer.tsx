import Logo from "@/public/images/logo.svg"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="flex flex-col items-center mt-24 bg-black/85 justify-center py-8 text-white">
      <Image alt="Logo" src={Logo} />
      <p>Projeto sem fins lucrativos - 2024</p>
    </footer>
  )
}
