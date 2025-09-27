"use client"
import React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const HotSlide = () => {
  return (
    <section className="mt-4">
      <h1 className="text-center text-white bg-black  text-lg py-4 mb-">
        Hot Deals
      </h1>

      <Carousel className="w-full max-w-full overflow-hidden relative">
        <CarouselContent>
          {/* Product 1 */}
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/BMW.png"
                alt="BMW M4 Coupe"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">BMW M4 Coupe</h2>
              <p className="mt-1 text-gray-600">$39,999</p>
            </div>
          </CarouselItem>

          {/* Product 2 */}
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/BMW.png"
                alt="Audi R8"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">Audi R8</h2>
              <p className="mt-1 text-gray-600">$49,999</p>
            </div>
          </CarouselItem>

          {/* Product 3 */}
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/BMW.png"
                alt="Mercedes AMG"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">Mercedes AMG</h2>
              <p className="mt-1 text-gray-600">$59,999</p>
            </div>
          </CarouselItem>

          {/* Product 4 */}
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/BMW.png"
                alt="Porsche 911"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">Porsche 911</h2>
              <p className="mt-1 text-gray-600">$69,999</p>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left--2 z-10" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 z-10" />
      </Carousel>
    </section>
  )
}

export default HotSlide
