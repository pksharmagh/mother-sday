import { LandingSections, LifeStages, MemoryJourneyBuilder } from "@/components/sections";

const aiFeatures = [
  "Emotional rewrite of memories",
  "Nostalgic storytelling enhancement",
  "Image caption generation",
  "Cinematic memory summaries",
  "Mother-perspective generation",
  "Emotional timeline narration",
  "Tribute generation",
  "Title generation for memory collections",
  "Miss home reflections"
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cinemadark text-parchment">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,171,107,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_60%_80%,rgba(212,171,107,0.12),transparent_35%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-30 [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" fill=\"none\"><filter id=\"n\"><feTurbulence baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"160\" height=\"160\" filter=\"url(%23n)\" opacity=\"0.06\"/></svg>')]" />
      <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-24 md:pt-36">
        <p className="text-xs uppercase tracking-[0.25em] text-ambermist">From Her Hands</p>
        <h1 className="max-w-4xl font-serifDisplay text-5xl leading-tight md:text-7xl">Every stage of your life carried her fingerprints.</h1>
        <p className="max-w-3xl text-lg text-parchment/85">A cinematic memory journey about childhood, distance, food, home, and the mother who silently shaped it all.</p>
        <button className="w-fit rounded-full bg-ambermist px-8 py-4 text-cinemadark transition hover:scale-[1.02]">Start My Story</button>
      </section>

      <div className="relative mx-auto max-w-6xl space-y-20 px-6 pb-28">
        <LandingSections />
        <MemoryJourneyBuilder />

        <section className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 md:grid-cols-2">
          <div>
            <h2 className="font-serifDisplay text-4xl">Mother’s Parallel Story</h2>
            <p className="mt-4 text-parchment/85">For each memory stage, the app generates <em>What Mom May Have Been Feeling</em> in a subtle, human, poetic voice.</p>
            <blockquote className="mt-6 rounded-2xl bg-black/25 p-4 text-ambermist">“She learned how to wait beside a silent phone.”</blockquote>
          </div>
          <div>
            <h3 className="mb-3 text-sm uppercase tracking-widest text-ambermist">AI Writing Guardrails</h3>
            <ul className="space-y-2 text-parchment/85">
              <li>• Warm, simple, cinematic language.</li>
              <li>• Culturally relatable and emotionally authentic.</li>
              <li>• Avoid melodrama, cringe phrasing, and generic motivational tone.</li>
            </ul>
          </div>
        </section>

        <LifeStages />

        <section className="rounded-3xl border border-ambermist/30 bg-gradient-to-br from-[#3a2c22] to-[#1a1512] p-8">
          <h2 className="font-serifDisplay text-4xl">Place, Food, and Timeline Experiences</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl bg-white/10 p-5"><h3 className="font-serifDisplay text-2xl">Memory Map</h3><p className="mt-2 text-sm text-parchment/85">Pin village, home, school, college, office city, railway station, and favorite food places with photos and notes.</p></article>
            <article className="rounded-2xl bg-white/10 p-5"><h3 className="font-serifDisplay text-2xl">Food Archive</h3><p className="mt-2 text-sm text-parchment/85">Add dishes, lunchbox recipes, festival sweets, comfort meals, and generate warm nostalgic captions.</p></article>
            <article className="rounded-2xl bg-white/10 p-5"><h3 className="font-serifDisplay text-2xl">Cinematic Timeline</h3><p className="mt-2 text-sm text-parchment/85">Parallax transitions, fading photographs, quote overlays, progress indicator, and documentary-style scroll flow.</p></article>
          </div>
        </section>

        <section className="rounded-3xl border border-white/15 bg-black/25 p-8">
          <h2 className="font-serifDisplay text-4xl">AI Feature System</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {aiFeatures.map((feature) => (
              <li key={feature} className="rounded-xl bg-white/10 p-3 text-parchment/90">{feature}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-ambermist/30 bg-ambermist/10 p-10 text-center shadow-glow">
          <h2 className="font-serifDisplay text-5xl">Final Tribute Experience</h2>
          <p className="mx-auto mt-4 max-w-3xl text-parchment/90">Generate a cinematic life summary, tribute card, emotional montage, mother appreciation message, and a downloadable story page.</p>
          <p className="mx-auto mt-8 max-w-2xl text-xl italic text-ambermist">“No matter how far life carried you, some hands still waited to feed you.”</p>
        </section>
      </div>
    </main>
  );
}
