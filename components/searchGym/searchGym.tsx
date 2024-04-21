"use client"

import Image from "next/image"
import IconHour from "@/public/images/icon-hour.png"
import { Card } from "../card/card"
import { UseSearchGym } from "@/lib/useSearchGym"
import { Legends } from "../legends/legends"

export function SearchGym() {
  const {
    filterClosedUnits,
    filteredLocations,
    handleClearClick,
    handlePeriodClick,
  } = UseSearchGym()

  return (
    <>
      <div className="max-w-7xl m-auto px-2 my-10">
        <div className="border-2 border-slate-300 p-5 rounded-md">
          <div className="text-black/60">
            <Image alt="IconHour" src={IconHour} className="w-12 h-12" />
            <h1 className="text-2xl my-5">Qual período quer treinar</h1>
            <div className="flex justify-between items-center my-4">
              <button
                className="bg-yellow-400 py-2 w-20 font-semibold rounded-md hover:bg-yellow-400/70"
                onClick={() => handlePeriodClick("Manhã")}
              >
                Manhã
              </button>
              <span>06:00 às 12:00</span>
            </div>

            <div className="flex justify-between items-center my-4">
              <button
                className="bg-yellow-400 py-2 w-20 font-semibold rounded-md hover:bg-yellow-400/70"
                onClick={() => handlePeriodClick("Tarde")}
              >
                Tarde
              </button>
              <span>12:01 às 18:00</span>
            </div>

            <div className="flex justify-between items-center my-4">
              <button
                className="bg-yellow-400 py-2 w-20 font-semibold rounded-md hover:bg-yellow-400/70"
                onClick={() => handlePeriodClick("Noite")}
              >
                Noite
              </button>
              <span>18:01 às 23:00</span>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={filterClosedUnits}
              className="bg-yellow-400 py-2 w-48 sm:w-56 font-semibold rounded-md hover:bg-yellow-400/70"
            >
              Exibir unidades fechadas
            </button>
            <button
              onClick={handleClearClick}
              className="font-semibold border border-slate-300 py-2 w-48 sm:w-56 rounded-md"
            >
              Limpar
            </button>
          </div>
        </div>

        {/* legendas */}
        <Legends />

        {/* Card de visualização dos dados das academias */}
        <Card filteredLocations={filteredLocations} />
      </div>
    </>
  )
}
