import Image from "next/image"
import IconHour from "@/public/images/icon-hour.png"
import { CheckBox } from "./checkbox"

export function SearchGym() {
  return (
    <form className="max-w-7xl m-auto px-2 my-10">
      <div className="border-2 border-slate-300 p-5 rounded-md">
        <div className="text-black/60">
          <Image alt="IconHour" src={IconHour} className="size-12" />
          <h1 className="text-2xl my-5">Qual período quer treinar</h1>
          <CheckBox
            checkboxid="manha-checkbox"
            openinghours="06:00 às 12:00"
            period="Manhã"
          />
          <CheckBox
            checkboxid="manha-checkbox"
            openinghours="12:01 às 18:00"
            period="Tarde"
          />
          <CheckBox
            checkboxid="manha-checkbox"
            openinghours="18:01 às 23:00"
            period="Noite"
          />
        </div>

        <div className="flex justify-between items-center my-10">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="fechado"
              className="rounded-full focus:right-0 text-yellow-400 focus:ring-white"
            />
            <label htmlFor="fechado" className="ml-2">
              Exibir unidades fechadas
            </label>
          </div>
          <span>Resultados encontrados:</span>
        </div>
        <div className="flex justify-center gap-3">
          <button className="bg-yellow-400 py-2 w-48 sm:w-56 font-semibold rounded-md">
            Encontrar unidade
          </button>
          <button className="font-semibold border border-slate-300 py-2 w-48 sm:w-56 rounded-md">
            Limpar
          </button>
        </div>
      </div>
    </form>
  )
}
