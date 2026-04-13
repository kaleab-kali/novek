"use client";

import React from "react";
import { Marquee } from "@/components/shared/marquee";

const CLIENTS = [
  "Dashen Bank",
  "Kuriftu Resort & Spa",
  "Ministry of Innovation",
  "Sheger Mart",
  "Yod Abyssinia",
  "Flintstone Homes",
  "Ethiopian Airlines",
  "Awash Bank",
] as const;

export const TrustBar = React.memo(
  () => (
    <section className="border-y border-white/[0.06] py-5 sm:py-6">
      <Marquee speed={40} pauseOnHover>
        {CLIENTS.map((name) => (
          <span
            key={name}
            className="mx-6 shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-widest text-[#6B6560] select-none sm:mx-10 sm:text-xs"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  ),
  () => true
);
TrustBar.displayName = "TrustBar";
