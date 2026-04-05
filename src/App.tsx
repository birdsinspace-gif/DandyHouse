import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  const { scrollY } = useScroll();

  const heroImageY = useTransform(scrollY, [0, 700], [0, 140]);
  const heroCopyY = useTransform(scrollY, [0, 500], [0, -36]);

  const pillars = [
    {
      title: "Hospitality",
      body: "A place where people are received warmly, fed generously, and welcomed without pretense."
    },
    {
      title: "Prayer",
      body: "Rooted in Christ and grounded in Scripture, with space for reflection, intercession, and quiet renewal."
    },
    {
      title: "Gathering",
      body: "Built for meals, retreats, fellowship, and the kind of conversations that are hard to have anywhere else."
    }
  ];

  const uses = [
    "Small retreats and day gatherings",
    "Meals, fellowship, and hospitality nights",
    "Prayer gatherings and scripture evenings",
    "Rest, reflection, and pastoral care"
  ];

  const rhythms = [
    {
      number: "01",
      title: "Arrive",
      body: "Step out of the noise and into a place that immediately slows the pace."
    },
    {
      number: "02",
      title: "Gather",
      body: "Share a table, a porch, a living room, and the kind of presence that invites conversation."
    },
    {
      number: "03",
      title: "Pray",
      body: "Create room for scripture, stillness, prayer, and deeper attention to the Lord."
    },
    {
      number: "04",
      title: "Return Renewed",
      body: "Leave steadier, encouraged, and more connected than when you arrived."
    }
  ];

  const sectionFade = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7 }
  } as const;

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#181512]">
      <section className="relative min-h-[95vh] overflow-hidden">
        <motion.div
          style={{ y: heroImageY }}
          className="absolute inset-0 scale-110 bg-cover bg-center"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,12,10,0.38), rgba(15,12,10,0.68)), url('/house-hero.jpg')"
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_38%)]" />

        <div className="relative mx-auto flex min-h-[95vh] max-w-7xl items-end px-6 pb-16 pt-28 md:px-10 md:pb-20">
          <motion.div style={{ y: heroCopyY }} className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-sm uppercase tracking-[0.32em] text-[#e4d8ca]"
            >
              The Dandelion House
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.06 }}
              className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl"
            >
              A home of peace, welcome,
              <br />
              and faithful presence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.16 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-[#efe4d7] md:text-xl"
            >
              A Christian home and hospitality ministry in Anderson, South Carolina,
              created for rest, gathering, prayer, and meaningful connection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#mission"
                className="rounded-2xl bg-[#243128] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#1c261f]"
              >
                Explore the Mission
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="-mt-10 relative z-10">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3 md:px-10">
          <div className="rounded-[1.5rem] border border-[#e1d7ca] bg-white p-6 shadow-[0_12px_40px_rgba(24,21,18,0.06)]">
            <p className="text-3xl font-semibold tracking-tight">0.9 acre</p>
            <p className="mt-2 text-sm leading-6 text-[#5d564e]">
              Enough outdoor breathing room to support quiet gatherings and hospitality.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#e1d7ca] bg-white p-6 shadow-[0_12px_40px_rgba(24,21,18,0.06)]">
            <p className="text-3xl font-semibold tracking-tight">4 bed</p>
            <p className="mt-2 text-sm leading-6 text-[#5d564e]">
              A substantial home footprint, suitable for residential hospitality and ministry use.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#e1d7ca] bg-white p-6 shadow-[0_12px_40px_rgba(24,21,18,0.06)]">
            <p className="text-3xl font-semibold tracking-tight">Anderson, SC</p>
            <p className="mt-2 text-sm leading-6 text-[#5d564e]">
              A grounded setting for a welcoming place built around faith, table, and presence.
            </p>
          </div>
        </div>
      </section>

      <motion.section
        id="mission"
        {...sectionFade}
        className="mx-auto max-w-7xl px-6 py-24 md:px-10"
      >
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6d645b]">
              The Mission
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              To create a home where people can encounter God and one another in a real, grounded way.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#5d564e]">
            <p>
              The Dandelion House exists to offer a simple invitation: come as you are,
              be welcomed, and receive rest, prayer, and presence in a place that feels
              lived in rather than institutional.
            </p>
            <p>
              This is not a program first. It is a home first. That is what gives the
              ministry its warmth, credibility, and depth.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionFade}
        className="overflow-hidden border-y border-[#e3d9cc] bg-[#fbf8f3]"
      >
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-6 py-24 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6d645b]">
                What this place offers
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Warm hospitality, spiritual depth, and a slower, better pace.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pillars.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="rounded-[1.75rem] border border-[#e3d8cb] bg-white p-8 shadow-[0_10px_35px_rgba(24,21,18,0.04)]"
                >
                  <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#5d564e]">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="min-h-[440px] lg:min-h-full">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(16,13,10,0.14), rgba(16,13,10,0.28)), url('/house-living.jpg')"
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
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6d645b]">
              Life together
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Ministry in this home is meant to feel simple, personal, and real.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {uses.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-[#e0d5c8] bg-white px-6 py-6 text-base leading-7 text-[#403932]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionFade}
        className="overflow-hidden border-y border-[#e3d9cc] bg-[#efe7db]"
      >
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-h-[440px] lg:min-h-full">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(17,14,11,0.18), rgba(17,14,11,0.32)), url('/house-exterior.jpg')"
              }}
            />
          </div>

          <div className="px-6 py-24 md:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6d645b]">
                The rhythm
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                A place that helps people slow down enough to hear from God.
              </h2>
            </div>

            <div className="mt-10 space-y-5">
              {rhythms.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="rounded-[1.75rem] border border-[#dfd2c3] bg-[#f8f3ea] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-[#7b5b45] px-3 py-2 text-sm font-semibold text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[#5d564e]">{step.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        {...sectionFade}
        className="bg-[#1f2822] text-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#b8c3ba]">
            Anderson, South Carolina
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            A welcoming place, rooted in Christ.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d6dfd8]">
            The Dandelion House is presented as a hospitality-centered Christian ministry concept
            built around home, table, prayer, and faithful presence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@dandelionhouse.org"
              className="rounded-2xl bg-white px-8 py-4 text-sm font-medium text-[#181512] transition hover:bg-[#efe6d8]"
            >
              hello@dandelionhouse.org
            </a>
            <a
              href="#mission"
              className="rounded-2xl border border-[#55645a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#28332c]"
            >
              Read the Mission
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
