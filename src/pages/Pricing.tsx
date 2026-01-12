import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const pricingTiers = [
  {
    name: "ESSENTIALS",
    price: "Free",
    description: "Get started with our core features and begin your SaaS journey.",
    cta: "Get Started",
    highlighted: false,
    features: [
      { label: "Priority email support", included: false },
      { label: "Advanced analytics", included: false },
      { label: "Custom branding", included: false },
      { label: "Access to all Pro features", included: true },
      { label: "Community support", included: true },
      { label: "Enhanced security measures", included: true },
    ],
  },
  {
    name: "PRO",
    price: "$19",
    period: ".99 per month",
    description: "Take your SaaS to the next level with advanced features and priority support.",
    cta: "Get Started",
    highlighted: true,
    features: [
      { label: "Priority email support", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Custom branding", included: false },
      { label: "Access to all Pro features", included: true },
      { label: "Community support", included: true },
      { label: "Enhanced security measures", included: true },
    ],
  },
  {
    name: "ENTERPRISE",
    price: "$249",
    period: ".99 per month",
    description: "Custom solutions for businesses looking for advanced control, flexibility.",
    cta: "Get Started",
    highlighted: false,
    features: [
      { label: "Priority email support", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Custom branding", included: true },
      { label: "Access to all Pro features", included: true },
      { label: "Community support", included: true },
      { label: "Enhanced security measures", included: true },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              className="text-primary font-medium mb-4 uppercase tracking-wider text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Simple, Transparent Pricing
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose Your Plan
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Select the perfect plan for your organization's governance, risk, and compliance needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <FadeUp key={tier.name} delay={0.1 * index}>
                <motion.div
                  className={`rounded-3xl overflow-hidden transition-all duration-300 ${
                    tier.highlighted
                      ? "border-gradient bg-gradient-card glow md:scale-105"
                      : "border border-border/30 bg-card/40 hover:bg-card/60 hover:border-primary/50"
                  }`}
                  whileHover={{ y: tier.highlighted ? -10 : -8 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8 md:p-10">
                    {/* Tier Label */}
                    <motion.p
                      className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {tier.name}
                    </motion.p>

                    {/* Price */}
                    <div className="mb-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                      >
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl md:text-6xl font-display font-bold">
                            {tier.price}
                          </span>
                          {tier.period && (
                            <span className="text-muted-foreground text-lg">
                              {tier.period}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-muted-foreground mb-8 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                    >
                      {tier.description}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                      className="mb-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant={tier.highlighted ? "hero" : "outline"}
                        size="lg"
                        className="w-full group"
                      >
                        {tier.cta}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>

                    {/* Features List */}
                    <div className="space-y-4 pt-8 border-t border-border/30">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature.label}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.25 + featureIndex * 0.05,
                            duration: 0.3,
                          }}
                        >
                          <div className="mt-1">
                            {feature.included ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                  delay: 0.25 + featureIndex * 0.05,
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 15,
                                }}
                              >
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                              </motion.div>
                            ) : (
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                  delay: 0.25 + featureIndex * 0.05,
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 15,
                                }}
                              >
                                <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                              </motion.div>
                            )}
                          </div>
                          <span
                            className={`text-sm ${
                              feature.included
                                ? "text-foreground font-medium"
                                : "text-muted-foreground"
                            }`}
                          >
                            {feature.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
              Frequently Asked
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Questions About Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our pricing plans and features.
            </p>
          </FadeUp>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer:
                  "Yes, we offer 20% discount on annual plans. Contact our sales team to learn more about enterprise volume discounts.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, wire transfers, and ACH payments for enterprise customers.",
              },
              {
                question: "Is there a free trial available?",
                answer:
                  "Yes, all plans come with a 14-day free trial. No credit card required to get started.",
              },
            ].map((faq, index) => (
              <FadeUp key={faq.question} delay={0.05 * index}>
                <motion.div
                  className="rounded-2xl border border-border/30 bg-card/40 p-6 hover:bg-card/60 transition-all duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="rounded-3xl border-gradient bg-gradient-card p-12 md:p-16 text-center glow"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <FadeUp>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Ready to Get Started?
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Start your free 14-day trial today. No credit card required. Explore all the features and see how GRC Sphere can transform your governance, risk, and compliance management.
                </p>
              </FadeUp>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="hero" size="lg" className="group">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg">
                    Schedule Demo
                  </Button>
                </motion.div>
              </motion.div>

              <FadeUp delay={0.3}>
                <p className="text-sm text-muted-foreground mt-6">
                  14-day free trial • No credit card required • Cancel anytime
                </p>
              </FadeUp>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
