import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Target, Users, Award, Globe, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoIcon from "@/assets/grc-sphere-icon.png";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "50M+", label: "Risks Managed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Expert Support" },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the security of our platform and your data above all else. Every feature is built with security in mind.",
  },
  {
    icon: Target,
    title: "Customer Obsession",
    description: "Your success is our success. We go above and beyond to ensure our customers achieve their compliance goals.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from working together. Our team and customers partner to solve complex challenges.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to customer service to continuous improvement.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're building solutions that help organizations worldwide protect their data and maintain trust.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push boundaries, leveraging AI and automation to solve tomorrow's compliance challenges today.",
  },
];

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Co-founder",
    bio: "Former CISO at Fortune 500. 15+ years in cybersecurity.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-founder",
    bio: "Ex-Google engineer. Expert in scalable systems.",
  },
  {
    name: "Sarah Williams",
    role: "VP of Product",
    bio: "Product leader from Salesforce. GRC domain expert.",
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    bio: "Former AWS principal. Built security at scale.",
  },
];

const About = () => {
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
              About Us
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building the Future of
              <br />
              <span className="text-gradient">GRC Excellence</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're on a mission to make governance, risk, and compliance effortless for every organization, empowering security teams to focus on what matters most.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div>
                <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Born from Frustration,
                  <br />
                  Built with Purpose
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    GRC Sphere was founded in 2020 by security professionals who were tired of managing compliance using spreadsheets, disconnected tools, and manual processes.
                  </p>
                  <p>
                    After years of struggling with legacy GRC solutions that were complex, expensive, and frustrating to use, we decided to build the platform we wished existed.
                  </p>
                  <p>
                    Today, we serve over 500 enterprise customers across 40+ countries, helping them streamline their GRC programs and stay ahead of evolving regulatory requirements.
                  </p>
                </div>
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
                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center p-2">
                        <img src={logoIcon} alt="GRC Sphere" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold">GRC Sphere</h3>
                        <p className="text-sm text-muted-foreground">Founded 2020 • San Francisco</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-2xl font-bold text-foreground">200+</p>
                        <p className="text-xs text-muted-foreground">Team Members</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-2xl font-bold text-foreground">$50M</p>
                        <p className="text-xs text-muted-foreground">Series B Raised</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-2xl font-bold text-foreground">40+</p>
                        <p className="text-xs text-muted-foreground">Countries</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-2xl font-bold text-foreground">50+</p>
                        <p className="text-xs text-muted-foreground">Frameworks</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                Our Values
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                What Drives Us Every Day
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Our values shape every decision we make and every feature we build.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  className="p-8 rounded-2xl border-gradient bg-gradient-card h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                Leadership Team
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Meet the People Behind GRC Sphere
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Industry veterans and innovators united by a passion for simplifying GRC.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  className="p-6 rounded-2xl border-gradient bg-gradient-card text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </motion.div>
                  <h3 className="text-lg font-display font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Transform Your GRC Program?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 500+ enterprises already using GRC Sphere to streamline compliance.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
