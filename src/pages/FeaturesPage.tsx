import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FadeUp, ScaleUp, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";
import { featureOutcomes, platformModules } from "@/data/platformModules";

const platformPillars = [
  "AI risk scoring",
  "Predictive risk intelligence",
  "Automated evidence",
  "Unified audit reporting",
  "Asset and threat correlation",
  "Risk-based remediation",
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute right-1/4 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.16, 1], opacity: [0.28, 0.45, 0.28] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_440px]">
            <div>
              <motion.p
                className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Core Platform
              </motion.p>
              <motion.h1
                className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                AI-powered GRC modules built to predict risk before damage occurs.
              </motion.h1>
              <motion.p
                className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                This feature page is driven by the MATAR proposal deck: the modules, outcomes, controls, and deployment
                model now map directly to the platform story in the presentation.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild variant="hero" size="lg">
                  <a href="#module-catalog">
                    Explore Modules
                    <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions">View Industry Solutions</Link>
                </Button>
              </motion.div>
            </div>

            <ScaleUp delay={0.15}>
              <div className="rounded-3xl border-gradient bg-gradient-card p-6">
                <div className="flex items-center gap-3 border-b border-border/30 pb-5">
                  <div className="rounded-2xl bg-primary/10 p-3">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">GRC Sphere v2.4</p>
                    <h2 className="text-2xl font-display font-semibold">Intelligence Engine</h2>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {platformPillars.map((pillar) => (
                    <div key={pillar} className="flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      <section className="border-y border-border/30 bg-card/20 py-14">
        <div className="container mx-auto grid gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureOutcomes.map((outcome, index) => (
            <FadeUp key={outcome.label} delay={index * 0.06}>
              <div className="h-full rounded-2xl border-gradient bg-gradient-card p-6">
                <p className="text-4xl font-display font-bold text-primary">{outcome.value}</p>
                <h3 className="mt-3 text-lg font-display font-semibold">{outcome.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{outcome.detail}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="module-catalog" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <FadeUp>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Module Catalog</p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  The proposal modules, translated into a browsable product page.
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.14}>
              <p className="text-base leading-8 text-muted-foreground">
                Each module below follows the deck language: lifecycle-driven, AI-assisted, measurable, and tied to
                security, compliance, governance, assets, threats, vulnerabilities, incidents, and executive reporting.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.04}>
            {platformModules.map((module) => (
              <StaggerItem key={module.code}>
                <motion.article
                  className="group flex h-full flex-col rounded-3xl border-gradient bg-gradient-card p-7 transition-all duration-300"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <module.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full border border-border/40 bg-background/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {module.code}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-display font-semibold">{module.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{module.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {module.lifecycle.map((step) => (
                      <span
                        key={step}
                        className="rounded-full border border-border/40 bg-background/30 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="container relative z-10 mx-auto px-6">
          <ScaleUp>
            <div className="rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mx-auto mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
                  <Layers3 className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  One platform for prevention, audit readiness, and board-level assurance.
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                  GRC Sphere shifts teams from reactive checklists to continuous risk prevention with quantified
                  exposure, automated workflows, and executive-ready dashboards.
                </p>
                <div className="mt-9">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/?contactForm=true">
                      Start Your Transformation
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
