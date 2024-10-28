"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

import type { LottieOptions, LottieRef } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function LottieTrigger(props: Omit<LottieOptions, "lottieRef">) {
  const lottieRef: LottieRef = useRef(null);

  const playAnimation = () => {
    if (lottieRef.current?.animationItem?.isPaused) {
      lottieRef.current.animationItem.resetSegments(true);
      lottieRef.current.animationItem.play();
    }
  };

  return (
    <Lottie
      autoplay={false}
      loop={false}
      lottieRef={lottieRef}
      onClick={playAnimation}
      {...props}
    />
  );
}
