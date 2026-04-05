import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillars = [
    { title: "Hospitality", body: "A home where people are welcomed and known." },
    { title: "Faith", body: "Rooted in Christ and lived out daily." },
    { title: "Community", body: "Meals, prayer, and real connection." }
  ];

  const gatherings = [
    "Weekly dinners",
    "Prayer gatherings",
    "Quiet retreats",
    "Open table hospitality"
  ];

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#1a1714]">

      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,16,12,0.5), rgba(20,16,12,0.7)), url('https://images.unsplash.com/photo-1560185007-5f0bb1866cab')",
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        />

        <div className="relative mx-auto flex min-h-[90vh] items-end px-6 pb-16 max-w-6xl">
          <div>
            <h1 className="text-5xl text-white md:text-7xl font-semibold">
              The Dandelion House
            </h1>

            <p className="mt-6 text-lg text-white max-w-xl">
              A home of peace, presence, and welcome in Anderson, South Carolina.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold md:text-5xl">
          A place to encounter God and one another.
        </h2>

        <p className="mt-6 text-lg text-[#5b544c] max-w-2xl">
          This is not an institution. It is a home. And in that simplicity,
          something deeper becomes possible.
        </p>
      </section>

      {/* PILLARS */}
      <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {pillars.map((p) => (
          <div key={p.title} className="bg-white p-6 border rounded-xl">
            <h3 className="font-semibold text-xl">{p.title}</h3>
            <p className="mt-3 text-[#5b544c]">{p.body}</p>
          </div>
        ))}
      </section>

      {/* GATHERINGS */}
      <section className="bg-[#fbf8f3] mt-24 py-20 px-6">
        <h2 className="text-3xl font-semibold text-center">
          Life together looks like:
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {gatherings.map((g) => (
            <div key={g} className="bg-white p-5 border rounded-xl">
              {g}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2621] text-white py-24 text-center">
        <h2 className="text-4xl font-semibold">
          You are welcome here.
        </h2>

        <p className="mt-6 text-lg">
          Come for a meal, a conversation, or simply a place to breathe.
        </p>
      </section>

    </div>
  );
}
