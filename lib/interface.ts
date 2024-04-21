interface Schedule {
  weekdays: string
  hour: string
}

export interface Location {
  id: number
  title: string
  content: string
  schedules?: Schedule[]
  mask: string
  towel: string
  fontain: string
  locker_room: string
}

export interface CardProps {
  filteredLocations: Location[]
}
