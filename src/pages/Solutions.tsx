import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Shield, Cloud, Database, BarChart3, FileCheck, Zap, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const grcFeatures = [
  {
    icon: Shield,
    title: "Unified Governance",
    description: "Centralize all governance activities in one platform. Manage policies, procedures, and controls with complete visibility.",
  },
  {
    icon: BarChart3,
    title: "Risk Management",
    description: "Identify, assess, and mitigate risks with AI-powered analytics. Track risk across your entire organization.",
  },
  {
    icon: FileCheck,
    title: "Compliance Automation",
    description: "Automate compliance workflows and evidence collection. Stay audit-ready with continuous monitoring.",
  },
  {
    icon: Database,
    title: "Framework Support",
    description: "Support for SOC 2, ISO 27001, GDPR, HIPAA, PCI-DSS, and 50+ other compliance frameworks.",
  },
  {
    icon: Zap,
    title: "Real-time Reporting",
    description: "Generate comprehensive compliance reports instantly. Board-ready dashboards and visualizations.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Role-based access control with granular permissions. Ensure the right people have the right access.",
  },
];

const cloudAssessmentFeatures = [
  {
    icon: Cloud,
    title: "Multi-Cloud Support",
    description: "Assess security across AWS, Azure, GCP, and other cloud providers from a single dashboard.",
  },
  {
    icon: Shield,
    title: "Virtual Patching",
    description: "Automatically apply virtual patches to protect against vulnerabilities without disrupting operations.",
  },
  {
    icon: CheckCircle2,
    title: "Continuous Assessment",
    description: "24/7 automated security assessments with real-time alerts and remediation recommendations.",
  },
  {
    icon: Database,
    title: "Configuration Analysis",
    description: "Deep analysis of cloud configurations to identify misconfigurations and security gaps.",
  },
  {
    icon: BarChart3,
    title: "Risk Scoring",
    description: "AI-powered risk scoring helps prioritize vulnerabilities and focus on what matters most.",
  },
  {
    icon: Zap,
    title: "Automated Remediation",
    description: "Automatically fix common security issues and misconfigurations with one-click remediation.",
  },
];

const virtualPatchingBenefits = [
  "Protect against known vulnerabilities immediately",
  "No downtime or service disruption",
  "Apply patches across multiple cloud environments",
  "Compliance with security standards",
  "Reduced attack surface",
  "Automated patch deployment",
];

const Solutions = () => {
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
              Our Solutions
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Comprehensive GRC Solutions
              <br />
              <span className="text-gradient">for Modern Enterprises</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Powerful tools to manage governance, risk, and compliance, plus advanced cloud security assessment with virtual patching capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* GRC Management Platform Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeUp>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                GRC Management Platform
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Unified Platform for
                <br />
                <span className="text-gradient">Governance, Risk & Compliance</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Consolidate all your GRC activities into one powerful platform. Eliminate silos, reduce complexity, and gain complete visibility into your compliance posture.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {grcFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="group p-8 rounded-2xl border-gradient bg-gradient-card hover:glow-sm transition-all duration-500 h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cloud Assessment Tool Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div>
                <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                  Cloud Assessment Tool
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Advanced Cloud Security
                  <br />
                  <span className="text-gradient">with Virtual Patching</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive cloud security assessment tool that provides continuous monitoring, vulnerability detection, and automated virtual patching to protect your cloud infrastructure.
                </p>

                <div className="space-y-4 mb-8">
                  {virtualPatchingBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{benefit}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="hero" size="lg" className="group">
                    Learn More About Virtual Patching
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </SlideInLeft>
            
            <SlideInRight>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
                <motion.div 
                  className="relative rounded-2xl border-gradient bg-gradient-card p-8 glow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 pb-6 border-b border-border/30">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Cloud className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold">Cloud Assessment</h3>
                        <p className="text-sm text-muted-foreground">Virtual Patching Enabled</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-2xl font-bold text-foreground">99.9%</p>
                        <p className="text-xs text-muted-foreground">Uptime</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-2xl font-bold text-foreground">24/7</p>
                        <p className="text-xs text-muted-foreground">Monitoring</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-2xl font-bold text-foreground">&lt;5min</p>
                        <p className="text-xs text-muted-foreground">Patch Time</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-2xl font-bold text-foreground">100+</p>
                        <p className="text-xs text-muted-foreground">Cloud Accounts</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Cloud Assessment Features */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeUp>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                Cloud Assessment Capabilities
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Comprehensive Cloud Security
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Advanced features to assess, monitor, and protect your cloud infrastructure with automated virtual patching.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {cloudAssessmentFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="group p-8 rounded-2xl border-gradient bg-gradient-card hover:glow-sm transition-all duration-500 h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
};

export default Solutions;
