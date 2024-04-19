import recommendedmask from "@/public/images/recommended-mask.png"
import requiredmask from "@/public/images/required-mask.png"
import requiredtowel from "@/public/images/required-towel.png"
import recommendedtowel from "@/public/images/recommended-towel.png"
import partialfountain from "@/public/images/partial-fountain.png"
import forbiddenfountain from "@/public/images/forbidden-fountain.png"
import requiredlockerroom from "@/public/images/required-lockerroom.png"
import partiallockerroom from "@/public/images/partial-lockerroom.png"
import forbiddenlockerroom from "@/public/images/forbidden-lockerroom.png"
import Image from "next/image"

export function Legends() {
  return (
    <div className="max-w-7xl mx-auto my-6 bg-slate-200/70 py-5 px-2 flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 lg:w-1/4 px-2 py-2">
        <h1 className="text-center text-lg sm:text-xl">Máscara</h1>
        <div className="flex gap-2 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="requiredmask"
              src={requiredmask}
              className="w-16 sm:w-12 md:w-20"
            />
            <span className="text-xs sm:text-base">Obrigatório</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="requiredmask"
              src={recommendedmask}
              className="w-16 sm:w-12 md:w-20"
            />
            <span className="text-xs sm:text-base">Recomendado</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 px-2 py-2">
        <h1 className="text-center text-lg sm:text-xl">Toalha</h1>
        <div className="flex gap-2 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="requiredmask"
              src={requiredtowel}
              className="w-16 sm:w-12 md:w-20"
            />
            <span className="text-xs sm:text-base">Obrigatório</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="requiredmask"
              src={recommendedtowel}
              className="w-16 sm:w-12 md:w-20"
            />
            <span className="text-xs sm:text-base">Recomendado</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 px-2 py-2">
        <h1 className="text-center text-lg sm:text-xl">Bebedouro</h1>
        <div className="flex gap-2 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="requiredmask"
              src={partialfountain}
              className="w-16 sm:w-12 md:w-20"
            />
            <span className="text-xs sm:text-base">Parcial</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="requiredmask"
              src={forbiddenfountain}
              className="w-16 sm:w-12 md:w-20"
            />
            <span className="text-xs sm:text-base">Proibido</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 px-2 py-2">
        <h1 className="text-center text-lg sm:text-xl">Vestiários</h1>
        <div className="flex gap-2 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="requiredmask"
              src={requiredlockerroom}
              className="w-16 sm:w-12 md:w-20"
            />
            <span className="text-xs sm:text-base">Liberado</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="requiredmask"
              src={partiallockerroom}
              className="w-16 sm:w-12 md:w-20"
            />
            <span className="text-xs sm:text-base">Parcial</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="requiredmask"
              src={forbiddenlockerroom}
              className="w-16 sm:w-12 md:w-20"
            />
            <span className="text-xs sm:text-base">Fechado</span>
          </div>
        </div>
      </div>
    </div>
  )
}
