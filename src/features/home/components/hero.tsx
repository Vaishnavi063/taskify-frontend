import { motion } from "framer-motion";
import { GridEffect } from "@/components";
import { siteConfigs } from "@/configs";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import useAuth from "@/hooks/use-auth";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const { isAuth } = useAuth();
  const link = isAuth ? "/dashboard/home" : "/auth/sign-up";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-10 px-4 sm:px-8">
      <GridEffect className="hidden sm:block absolute inset-0" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-foreground">
              Welcome to {siteConfigs.name}
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="inline-block">Simplifying</span>
            <br />
            <span className="inline-block">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text">
                Project Management
              </span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-lg sm:text-lg text-black max-w-2xl mx-auto mb-8 tracking-tighter "
        >
          Taskify is your ultimate tool for managing projects effortlessly.
          Collaborate, organize, and deliver with confidence.
        </motion.p>

        {/* Features Row */}
        <motion.div
          variants={itemVariants}
          className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 px-4"
        >
          {[
            {
              icon: "📊",
              label: "Project Management",
              desc: "Organize all your projects",
            },
            {
              icon: "✅",
              label: "Task Management",
              desc: "Track every task seamlessly",
            },
            {
              icon: "💰",
              label: "Budget Control",
              desc: "Monitor spending efficiently",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="text-center p-4 rounded-lg bg-muted/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-semibold text-sm mb-1">{feature.label}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link to={link}>
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-md hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-1.5 rounded-full border-2 border-primary/30 text-foreground font-semibold text-md hover:border-primary/60 hover:bg-primary/5 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5" />
            Learn More
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={itemVariants}
          className="text-center text-sm text-muted-foreground"
        >
          <p>✨ Join 10,000+ teams already using Taskify</p>
        </motion.div>
      </motion.div>

      {/* Floating cards in background */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-lg blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-32 right-10 w-40 h-40 bg-primary/5 rounded-lg blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};

export default Hero;
