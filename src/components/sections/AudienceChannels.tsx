"use client";

import { useState } from "react";
import type { AudienceChannel } from "@/types/media-kit";
import { BarChart } from "@/components/ui/BarChart";

export function AudienceChannels({ channels }: { channels: AudienceChannel[] }) {
  const [selected, setSelected] = useState(channels[0]?.id ?? "instagram");

  return (
    <div className="mt-14">
      <div className="mb-8 grid grid-cols-2 gap-2 lg:hidden">
        {channels.map((channel) => {
          const isActive = channel.id === selected;

          return (
            <button
              key={channel.id}
              type="button"
              onClick={() => setSelected(channel.id)}
              className={`border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition ${
                isActive
                  ? "border-coffee bg-coffee text-cream"
                  : "border-coffee/25 text-coffee"
              }`}
            >
              {channel.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className={`border-t border-coffee/10 pt-8 ${
              channel.id === selected ? "" : "hidden lg:block"
            }`}
          >
            <p className="mb-8 hidden text-xs uppercase tracking-[0.18em] opacity-60 lg:block">
              {channel.label}
            </p>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.18em] opacity-50">
                  Gênero
                </p>
                <BarChart items={channel.gender} />
              </div>
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.18em] opacity-50">
                  Faixa etária
                </p>
                <BarChart items={channel.age} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
