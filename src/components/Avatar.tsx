"use client";

import { useState } from "react";

import lol from "@/assets/lol.json";
import sup from "@/assets/sup.json";
import wth from "@/assets/wth.json";

import { LottieTrigger } from "./LottieTrigger";

export function Avatar() {
  const [count, setCount] = useState<number>(0);

  function getKey() {
    return count % 5;
  }

  function getMemoji() {
    if (count === 4) return wth;
    if (count === 9) return lol;

    return sup;
  }

  function inc() {
    setCount(count + 1);
  }

  return (
    <div className="w-16 h-16 bg-blue-700 rounded-full">
      <LottieTrigger
        key={getKey()}
        animationData={getMemoji()}
        className="w-24 -translate-x-4"
        onComplete={inc}
      />
    </div>
  );
}
