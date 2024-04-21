import Image from "next/image"

import recommendedmask from "@/public/images/recommended-mask.png"
import requiredmask from "@/public/images/required-mask.png"
import requiredtowel from "@/public/images/required-towel.png"
import recommendedtowel from "@/public/images/recommended-towel.png"
import partialfountain from "@/public/images/partial-fountain.png"
import forbiddenfountain from "@/public/images/forbidden-fountain.png"
import requiredlockerroom from "@/public/images/required-lockerroom.png"
import partiallockerroom from "@/public/images/partial-lockerroom.png"
import forbiddenlockerroom from "@/public/images/forbidden-lockerroom.png"
import { CardProps } from "@/lib/interface"

export function Card({ filteredLocations }: CardProps) {
  return (
    <>
      <p className="flex items-center my-10 text-lg font-medium">
        Resultados encontrados: {filteredLocations.length}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLocations.map((location) => (
          <div key={location.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{location.title}</h3>
            <div
              className="text-gray-700 mb-2"
              dangerouslySetInnerHTML={{ __html: location.content }}
            />
            <div className="flex gap-1">
              {location.mask === "required" ? (
                <Image alt="mask" src={requiredmask} className="size-12" />
              ) : (
                <Image alt="mask" src={recommendedmask} className="size-12" />
              )}
              {location.towel === "required" ? (
                <Image alt="towel" src={requiredtowel} className="size-12" />
              ) : (
                <Image alt="towel" src={recommendedtowel} className="size-12" />
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
                    <div key={schedule.weekdays} className="text-gray-600 mb-1">
                      <strong>{schedule.weekdays}:</strong> {schedule.hour}
                    </div>
                  ))
                : null}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
