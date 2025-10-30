"use client";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();
const CustomSlide = () => {
  const swiperElRef = useRef<any>(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e: any) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener("slidechange", (e: any) => {
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation
      pagination
      suppressHydrationWarning
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  );
};
export default CustomSlide;
