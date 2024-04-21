"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import IconHour from "@/public/images/icon-hour.png"

import recommendedmask from "@/public/images/recommended-mask.png"
import requiredmask from "@/public/images/required-mask.png"
import requiredtowel from "@/public/images/required-towel.png"
import recommendedtowel from "@/public/images/recommended-towel.png"
import partialfountain from "@/public/images/partial-fountain.png"
import forbiddenfountain from "@/public/images/forbidden-fountain.png"
import requiredlockerroom from "@/public/images/required-lockerroom.png"
import partiallockerroom from "@/public/images/partial-lockerroom.png"
import forbiddenlockerroom from "@/public/images/forbidden-lockerroom.png"

interface Schedule {
  weekdays: string
  hour: string
}

interface Location {
  id: number
  title: string
  content: string
  schedules?: Schedule[]
  mask: string
  towel: string
  fontain: string
  locker_room: string
}

export function SearchGym() {
  // Estados para armazenar os locais e o período selecionado
  const [locations, setLocations] = useState<Location[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null)
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([])

  // Função para carregar locais da API ao montar o componente
  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      )
      const data = await response.json()
      setLocations(data.locations)
    }
    fetchLocations()
  }, [])

  // Função para filtrar locais com base no período selecionado
  useEffect(() => {
    if (!selectedPeriod) {
      // Filtrar locais para remover academias sem horários disponíveis
      const filtered = locations.filter(
        (location) => location.schedules && location.schedules.length > 0
      )
      setFilteredLocations(filtered)
      return
    }

    const periodMap: Record<string, [string, string]> = {
      Manhã: ["06:00", "12:00"],
      Tarde: ["12:01", "18:00"],
      Noite: ["18:01", "23:00"],
    }

    const [startTime, endTime] = periodMap[selectedPeriod]

    const filtered = locations.filter((location) => {
      // Verifica se o local possui horários de funcionamento e filtra locais sem horários
      if (!location.schedules || location.schedules.length === 0) {
        return false
      }

      // Verifica se o local está aberto no período selecionado
      return location.schedules.some((schedule) => {
        const [opening, closing] = schedule.hour.split(" às ")
        return opening >= startTime && closing <= endTime
      })
    })

    setFilteredLocations(filtered)
  }, [selectedPeriod, locations])

  // Função para lidar com o clique nos botões de período
  const handlePeriodClick = (period: string) => {
    setSelectedPeriod(period)
  }

  const filterClosedUnits = () => {
    // Filtra as unidades com base nas horas de funcionamento
    const closedUnits = locations.filter((location) => {
      // Verifica se o local possui horários de funcionamento
      if (!location.schedules || !Array.isArray(location.schedules)) {
        return false // Se não houver horários, assume-se que a unidade está fechada
      }

      // Verifica se todos os horários indicam que a unidade está fechada
      return location.schedules.every((schedule) => {
        const [opening, closing] = schedule.hour.split(" às ")
        const closedAllDay = opening === "Fechada" || closing === "Fechada"
        return closedAllDay
      })
    })

    // Atualiza o estado com as unidades fechadas filtradas
    setFilteredLocations(closedUnits)
  }

  const handleClearClick = () => {
    // Redefine o período selecionado para null
    setSelectedPeriod(null)
    // Exibe todas as academias disponíveis, definindo filteredLocations como locations
    setFilteredLocations(filteredLocations)
  }

  return (
    <>
      <div className="max-w-7xl m-auto px-2 my-10">
        <div className="border-2 border-slate-300 p-5 rounded-md">
          <div className="text-black/60">
            <Image alt="IconHour" src={IconHour} className="w-12 h-12" />
            <h1 className="text-2xl my-5">Qual período quer treinar</h1>
            <div className="flex justify-between items-center my-4">
              <button
                className="bg-yellow-400 py-2 w-20 font-semibold rounded-md"
                onClick={() => handlePeriodClick("Manhã")}
              >
                Manhã
              </button>
              <span>06:00 às 12:00</span>
            </div>

            <div className="flex justify-between items-center my-4">
              <button
                className="bg-yellow-400 py-2 w-20 font-semibold rounded-md"
                onClick={() => handlePeriodClick("Tarde")}
              >
                Tarde
              </button>
              <span>12:01 às 18:00</span>
            </div>

            <div className="flex justify-between items-center my-4">
              <button
                className="bg-yellow-400 py-2 w-20 font-semibold rounded-md"
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
              className="bg-yellow-400 py-2 w-48 sm:w-56 font-semibold rounded-md"
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
          <div className="flex items-center my-10 text-lg font-medium">
            <span>Resultados encontrados: {filteredLocations.length}</span>
          </div>

          {/* Card de visualização dos dados das academias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLocations.map((location) => (
              <div
                key={location.id}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {location.title}
                </h3>
                <div
                  className="text-gray-700 mb-2"
                  dangerouslySetInnerHTML={{ __html: location.content }}
                />
                <div className="flex gap-1">
                  {location.mask === "required" ? (
                    <Image alt="mask" src={requiredmask} className="size-12" />
                  ) : (
                    <Image
                      alt="mask"
                      src={recommendedmask}
                      className="size-12"
                    />
                  )}
                  {location.towel === "required" ? (
                    <Image
                      alt="towel"
                      src={requiredtowel}
                      className="size-12"
                    />
                  ) : (
                    <Image
                      alt="towel"
                      src={recommendedtowel}
                      className="size-12"
                    />
                  )}
                  {location.fontain !== "partial" ? (
                    <Image
                      alt="fontain"
                      src={partialfountain}
                      className="size-12"
                    />
                  ) : (
                    <Image
                      alt="fontain"
                      src={forbiddenfountain}
                      className="size-12"
                    />
                  )}
                  {location.locker_room === "allowed" ? (
                    <Image
                      alt="fontain"
                      src={requiredlockerroom}
                      className="size-12"
                    />
                  ) : location.locker_room === "partial" ? (
                    <Image
                      alt="fontain"
                      src={partiallockerroom}
                      className="size-12"
                    />
                  ) : (
                    <Image
                      alt="fontain"
                      src={forbiddenlockerroom}
                      className="size-12"
                    />
                  )}
                </div>
                <div>
                  {/* Verifica se schedules é definido e é um array antes de usar map */}
                  {location.schedules && Array.isArray(location.schedules)
                    ? location.schedules.map((schedule) => (
                        <div
                          key={schedule.weekdays}
                          className="text-gray-600 mb-1"
                        >
                          <strong>{schedule.weekdays}:</strong> {schedule.hour}
                        </div>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
