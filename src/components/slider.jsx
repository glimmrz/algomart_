"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner-images/main-banner-01.png";
import banner2 from "@/assets/banner-images/main-banner-02.png";
import Text from "./text";
import Button from "./button";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderItems = [
    {
      image: banner,
      subtitle: "pure cotton",
      text: "explore the all new summer collection",
      buttonLabel: "browse shop",
      buttonIcon: "arrowRight",
    },
    {
      image: banner2,
      subtitle: "organic vegetables",
      text: "everyday health with organic vegetables.",
      buttonLabel: "shop now",
      buttonIcon: "arrowRight",
    },
  ];

  function nextSlide() {
    setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="bg-accent h-[75vh] lg:h-[70vh] max-h-[700px] lg:max-h-[600px] flex items-center justify-center select-none">
      <>
        <div className="relative h-full max-w-screen-3xl w-full">
          {/* SLider item */}
          {sliderItems.map((item, index) => (
            <div
              className={`absolute top-0 left-0 h-full w-full flex flex-col-reverse gap-2 opacity-0 transition-opacity duration-500 lg:grid lg:grid-cols-2 ${
                currentIndex === index && "!opacity-100 !z-[3]"
              }`}
              key={index}
            >
              <div
                className={`p-2 w-full flex flex-col justify-center items-center gap-2 lg:gap-4 lg:items-start xl:w-[80%] ${
                  currentIndex === index && "lg:animate-slideIn"
                }`}
              >
                <p className="text-xl lg:text-3xl capitalize text-center lg:text-left">
                  <span className="text-theme">100%</span> {item.subtitle}
                </p>
                <h2 className="text-3xl text-center lg:text-left lg:text-5xl xl:text-6xl first-letter:capitalize">
                  {item.text}
                </h2>
                <Text customStyles="text-center lg:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  reiciendis beatae consequuntur.
                </Text>

                <Link href={item.link ? item.link : "#"}>
                  <Button
                    label={item.buttonLabel}
                    icon="arrowRight"
                    variant="primary"
                  />
                </Link>
              </div>

              <figure className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={item.text}
                  className="object-cover object-right lg:object-center  xl:object-right"
                  fill
                  sizes="(max-width: 768px) 500px, 50vw"
                />
              </figure>
            </div>
          ))}

          {/* Slider dots */}
          <div className="hidden w-fit absolute bottom-2 left-2 gap-2 z-[3] lg:flex">
            {sliderItems?.map((_, i) => (
              <div
                role="button"
                aria-label="slider position indicator"
                className={`h-[15px] w-[15px] skew-x-[320deg] border-2 border-theme cursor-pointer transition-[width,background-color] duration-500 ${
                  currentIndex === i ? "bg-theme w-[30px]" : ""
                }`}
                key={i}
                onClick={() => setCurrentIndex(i)}
              ></div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}
