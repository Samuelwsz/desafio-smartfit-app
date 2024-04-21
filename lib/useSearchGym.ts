import { useEffect, useState } from "react"
import { Location } from "./interface"

export const UseSearchGym = () => {
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

  return {
    handleClearClick,
    filterClosedUnits,
    handlePeriodClick,
    filteredLocations,
  }
}
