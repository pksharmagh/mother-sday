"use client";

import { motion } from "framer-motion";
import { Camera, MapPin, Mic, Utensils, Users } from "lucide-react";
import { lifeStages } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export function LandingSections() {
  const blocks = ["Why this exists", "Life through memories", "The distance between home and work", "Meals that raised us", "A mother’s invisible timeline"];
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {blocks.map((item) => (
        <motion.article key={item} {...fadeUp} className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-glow">
          <h3 className="font-serifDisplay text-2xl text-parchment">{item}</h3>
          <p className="mt-3 text-sm text-parchment/80">A reflective chapter designed as a cinematic memoir scene with warmth, stillness, and emotional depth.</p>
        </motion.article>
      ))}
    </section>
  );
}

export function MemoryJourneyBuilder() {
  return (
    <section className="space-y-8">
      <motion.h2 {...fadeUp} className="font-serifDisplay text-4xl text-parchment">Memory Journey Builder</motion.h2>
      <motion.div {...fadeUp} className="grid gap-4 rounded-3xl border border-ambermist/30 bg-cinemadark/50 p-6 md:grid-cols-3">
        {[{ icon: Camera, label: "Photo upload" }, { icon: Mic, label: "Optional voice note" }, { icon: MapPin, label: "Location and hometown pin" }, { icon: Utensils, label: "Favorite food and festivals" }, { icon: Users, label: "People involved" }].map(({ icon: Icon, label }) => (
          <div key={label} className="rounded-2xl bg-white/10 p-4 text-parchment">
            <Icon className="mb-3 h-5 w-5 text-ambermist" />
            <p>{label}</p>
          </div>
        ))}
      </motion.div>
      <p className="text-parchment/80">Add multiple memories, reorder by drag timeline cards, edit anytime, and preview cinematic story mode with emotional narration overlays.</p>
    </section>
  );
}

export function LifeStages() {
  return (
    <section className="space-y-6">
      <h2 className="font-serifDisplay text-4xl text-parchment">Emotional Life Stages</h2>
      {lifeStages.map((stage, i) => (
        <motion.details key={stage.title} {...fadeUp} className="group rounded-3xl border border-white/15 bg-white/5 p-6 open:bg-white/10">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center justify-between">
              <h3 className="font-serifDisplay text-2xl text-parchment">{i + 1}. {stage.title}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-ambermist">{stage.tone}</span>
            </div>
          </summary>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm uppercase tracking-widest text-ambermist">Themes</h4>
              <ul className="space-y-1 text-parchment/85">{stage.themes.map((t) => <li key={t}>• {t}</li>)}</ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm uppercase tracking-widest text-ambermist">AI reflection prompts</h4>
              <ul className="space-y-1 text-parchment/85">{stage.prompts.map((p) => <li key={p}>“{p}”</li>)}</ul>
            </div>
          </div>
        </motion.details>
      ))}
    </section>
  );
}
