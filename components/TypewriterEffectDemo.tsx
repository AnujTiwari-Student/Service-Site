"use client";

import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Manage",
    },
    {
      text: "your",
    },
    {
      text: "health",
    },
    {
      text: "with",
    },
    {
      text: "Bharat Health.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="absolute top-[660px] hidden xl:flex xl:px-16">
      <TypewriterEffect words={words} />
    </div>)
  );
}
