import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp } from "./ScrollAnimations";
import logoIcon from "@/assets/grc-sphere-icon.png";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer id="about" className="border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <FadeUp className="col-span-2">
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <img src={logoIcon} alt="GRC Sphere" className="w-9 h-9" />
              <span className="text-xl font-display font-bold">GRC Sphere</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              The all-in-one GRC platform that transforms how enterprises manage governance, risk, and compliance.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </FadeUp>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <FadeUp key={category} delay={0.1 + categoryIndex * 0.05}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                      >
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    ) : (
                      <motion.a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>

        {/* Bottom Bar */}
        <FadeUp delay={0.3}>
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 GRC Sphere. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.label}
                  href={social.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
};
