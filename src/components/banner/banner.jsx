"use client";
import styles from "./banner.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import banner from "@/assets/banner-images/main-banner-01.png";
import banner2 from "@/assets/banner-images/main-banner-02.png";

import cat from "@/assets/banner-images/catbanner-01.png";
import cat2 from "@/assets/banner-images/catbanner-02.png";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderItems = [
    {
      image: banner,
      text: "explore the all new summer collection",
      buttonLabel: "browse shop",
      buttonIcon: "arrowRight",
    },
    {
      image: banner2,
      text: "winter is just near the corner. Explore fully.",
      buttonLabel: "view collection",
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
    <div className={styles.banner}>
      {/* slider */}
      <div className={styles.slider}>
        {/* slider items */}
        {sliderItems?.map((item, index) => (
          <div
            className={`${currentIndex === index ? styles.active : ""} ${
              styles.slider_item
            }`}
            key={index}
          >
            <figure className={styles.slider_image_wrapper}>
              <Image
                src={item?.image}
                alt=""
                className={styles.slider_image}
                fill
                sizes="(max-width: 768px) 500px, 1000px"
              />
            </figure>
          </div>
        ))}

        {/* Slider dots */}
        <div className={styles.dots_wrapper}>
          {sliderItems?.map((_, i) => (
            <div
              role="button"
              aria-label="slider position indicator"
              className={`${styles.dot} ${
                currentIndex === i ? styles.active : ""
              }`}
              key={i}
              onClick={() => setCurrentIndex(i)}
            ></div>
          ))}
        </div>
      </div>
      {/* Cards */}
      <div className={styles.cards}>
        <div className={styles.card_item}>
          <figure className={styles.card_image_wrapper}>
            <Image
              src={cat}
              fill
              alt=""
              sizes="(max-width: 1024px) 0px, 40vw"
              className={styles.card_image}
            />
          </figure>
        </div>
        <div className={styles.card_item}>
          <figure className={styles.card_image_wrapper}>
            <Image
              src={cat2}
              fill
              alt=""
              sizes="(max-width: 1024px) 0px, 40vw"
              className={styles.card_image}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
