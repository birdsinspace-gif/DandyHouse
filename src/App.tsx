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
    {
      title: "Hospitality",
      body: "A home where people are welcomed, known, and invited to rest."
    },
    {
      title: "Faith",
      body: "Rooted in Christ, grounded in Scripture, and lived out in daily life."
    },
    {
      title: "Community",
      body: "A place for conversation, meals, prayer, and meaningful connection."
    }
  ];

  const gatherings = [
    "Weekly dinners and fellowship",
    "Prayer and scripture gatherings",
    "Quiet retreats and reflection",
    "Hosting friends, neighbors, and travelers"
  ];

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#1a1714]">

      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,16,12,0.45), rgba(20,16,12,0.65)), url('/house-hero.jpg')",
            transform: `translateY(${scrollY * 0.15}px) scale(1.05)`
          }}
        />

        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl items-end px-6 pb-16 md:px-10">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm uppercase tracking-[0.3em] text-[#e6dcd0]"
            >
              The Dandelion House
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-5xl font-semibold leading-tight text-white md:text-7xl"
            >
              A home of peace,  
              <br />
              presence, and welcome.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 max-w-xl text-lg text-[#e6dcd0]"
            >
              A Christian home and ministry space in Anderson, South Carolina,
              created for rest, fellowship, and faithful living.
            </motion.p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#6b635a]">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              To create a place where people can encounter God and one another.
            </h2>
          </div>

          <div className="text-lg leading-8 text-[#5b544c]">
            <p>
              The Dandelion House exists to offer a simple but meaningful invitation:
              come as you are, be welcomed, and experience the presence of God in a real and grounded way.
            </p>

            <p className="mt-4">
              This is not an institution. It is a home. And in that simplicity,
              something deeper becomes possible.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="h-[420px] w-full">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,16,12,0.2), rgba(20,16,12,0.35)), url('/house-living.jpg')"
          }}
        />
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#e3dbcf] bg-white p-8"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-[#5b544c]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GATHERINGS */}
      <section className="border-y border-[#e5ded3] bg-[#fbf8f3]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Life together looks like:
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {gatherings.map((g) => (
              <div
                key={g}
                className="rounded-xl border border-[#e3dbcf] bg-white p-6"
              >
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE HOME */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <img
              src="/house-exterior.jpg"
              className="rounded-xl"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#6b635a]">
              The Home
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              A place set apart, but open.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5b544c]">
              Located in Anderson, South Carolina, this home sits on nearly an acre of land,
              offering space, quiet, and a natural rhythm of life that invites rest. :contentReference[oaicite:1]{index=1}
            </p>

            <p className="mt-4 text-lg leading-8 text-[#5b544c]">
              It is both a residence and a gathering place, where everyday life and ministry are woven together.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2621] text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10">
          <h2 className="text-4xl font-semibold md:text-5xl">
            You are welcome here.
          </h2>

          <p className="mt-6 text-lg text-[#cfd7d2]">
            Whether for a meal, a conversation, or simply a place to breathe,
            the door is open.
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@dandelionhouse.org"
              className="bg-white text-black px-8 py-4 rounded-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
