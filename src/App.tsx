import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const experiences = [
    {
      title: "Guided Contrast Cycles",
      body: "Move between cedar sauna, cold plunge, and recovery lounge in a structured 75-minute social ritual."
    },
    {
      title: "Neighborhood Membership",
      body: "Built for repeat practice, familiar faces, and a third place that feels grounded, warm, and local."
    },
    {
      title: "Private Bookings",
      body: "Reserve the space for founders, teams, birthdays, creative gatherings, or investor-hosted wellness nights."
    },
    {
      title: "Evening Programming",
      body: "Breathwork, ambient music nights, tea service, founder breakfasts, and curated community sessions."
    }
  ];

  const amenities = [
    "Finnish-style dry sauna",
    "Cold plunge circuit",
    "Outdoor courtyard lounge",
    "Tea and mineral bar",
    "Private changing rooms",
    "Member event calendar"
  ];

  const rituals = [
    {
      number: "01",
      title: "Arrive",
      body: "Drop out of the noise, settle into the space, and transition out of the workday."
    },
    {
      number: "02",
      title: "Heat",
      body: "Step into dry heat designed to quiet the nervous system and open the body."
    },
    {
      number: "03",
      title: "Cold",
      body: "Reset with cold immersion that sharpens attention, recovery, and presence."
    },
    {
      number: "04",
      title: "Connect",
      body: "Stay for tea, conversation, and the kind of community that forms around repeat ritual."
    }
  ];

  const memberships = [
    {
      name: "Day Pass",
      price: "$38",
      detail: "One 75-minute contrast session."
    },
    {
      name: "Neighborhood",
      price: "$145",
      detail: "4 visits per month, priority booking, member pricing on events."
    },
    {
      name: "Unlimited",
      price: "$235",
      detail: "Unlimited sessions, guest passes, and early access to programming."
    }
  ];

  const sectionFade = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7 }
  } as const;

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#181512]">
      <section className="relative min-h-[92vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,14,11,0.48), rgba(17,14,11,0.62)), url('/sauna-hero.jpg')",
            transform: `translateY(${scrollY * 0.18}px) scale(1.05)`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-16 pt-28 md:px-10 md:pb-20">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-sm uppercase tracking-[0.32em] text-[#d5c6b6]"
            >
              Ember House
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl"
            >
              Sauna. Cold plunge.{" "}
              <span className="text-[#d39a74]">Neighborhood ritual.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-[#efe4d7] md:text-xl"
            >
              A premium sauna and cold plunge social club in Cabbagetown, Atlanta,
              designed for recovery, rhythm, and real connection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#membership"
                className="rounded-2xl bg-[#1f2c26] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#18211d]"
              >
                View Memberships
              </a>
              <a
                href="#concept"
                className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Explore the Concept
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="concept"
        {...sectionFade}
        className="bg-[#f5f0e8]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6c6256]">
                The Concept
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                A modern bathhouse for people who want recovery with culture, not sterile wellness.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#5b5349]">
              <p>
                Ember House is built around a simple premise: people come for the heat and cold, then stay for the atmosphere, the rhythm, and the community.
              </p>
              <p>
                The model blends premium wellness with neighborhood social energy, creating a repeat-visit destination that feels both restorative and magnetic.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionFade}
        className="overflow-hidden border-y border-[#e1d6c9] bg-[#fbf8f3]"
      >
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-6 py-24 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6c6256]">
                Experiences
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Recovery designed to feel social, intentional, and worth returning to.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {experiences.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="rounded-[1.75rem] border border-[#e3d7ca] bg-white p-8 shadow-[0_10px_35px_rgba(24,21,18,0.04)]"
                >
                  <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#5b5349]">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="min-h-[420px] lg:min-h-full">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(18,15,12,0.12), rgba(18,15,12,0.22)), url('/sauna-lounge.jpg')"
              }}
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionFade}
        className="mx-auto max-w-7xl px-6 py-24 md:px-10"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6c6256]">
              The Ritual
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A repeatable flow people build into their week.
            </h2>
          </div>

          <div className="space-y-5">
            {rituals.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-[1.75rem] border border-[#e3d7ca] bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[#8a4b2a] px-3 py-2 text-sm font-semibold text-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[#5b5349]">{step.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionFade}
        className="overflow-hidden border-y border-[#e1d6c9] bg-[#efe6d8]"
      >
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-h-[420px] lg:min-h-full">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(18,15,12,0.18), rgba(18,15,12,0.28)), url('/sauna-detail.jpg')"
              }}
            />
          </div>

          <div className="px-6 py-24 md:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6c6256]">
                Amenities
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Premium, tactile, and built for a strong first impression.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {amenities.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-[#d6c8b7] bg-[#f8f2e9] px-5 py-5 text-base text-[#3d362f]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="membership"
        {...sectionFade}
        className="mx-auto max-w-7xl px-6 py-24 md:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6c6256]">
            Membership
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Structured for both drop-ins and recurring local members.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {memberships.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-[1.75rem] border border-[#e3d7ca] bg-white p-8 shadow-[0_10px_35px_rgba(24,21,18,0.04)]"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#6c6256]">
                {item.name}
              </p>
              <p className="mt-4 text-5xl font-semibold tracking-tight">{item.price}</p>
              <p className="mt-4 text-base leading-7 text-[#5b5349]">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...sectionFade}
        className="bg-[#1d2621] text-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#a8b7ac]">
            Cabbagetown, Atlanta
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Built for founders, creatives, operators, and locals who want a better ritual.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d6dfd8]">
            Ember House is presented here as a premium, investor-ready concept for a sauna and cold plunge social club in one of Atlanta’s most culture-rich neighborhoods.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:founding@emberhouseatl.com"
              className="rounded-2xl bg-white px-8 py-4 text-sm font-medium text-[#181512] transition hover:bg-[#efe6d8]"
            >
              founding@emberhouseatl.com
            </a>
            <a
              href="#membership"
              className="rounded-2xl border border-[#55645a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#263129]"
            >
              View the Model
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
