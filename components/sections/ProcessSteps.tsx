"use client";
import { motion } from "framer-motion";
import MobileCarousel from "@/components/MobileCarousel";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

interface Step { number: string; title: string; desc: string }
interface ProcessStepsProps {
  heading: string;
  subheading: string;
  steps: readonly Step[];
}

export default function ProcessSteps({ heading, subheading, steps }: ProcessStepsProps) {
  return (
    <section className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">{heading}</h2>
          <p className="opacity-70 max-w-xl mx-auto">{subheading}</p>
        </motion.div>

        <MobileCarousel label="Process Line" theme="dark">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-gray-200 border-t-accent bg-white p-6"
            >
              <h3 className="mb-2 text-[15px] font-bold text-primary">{step.title}</h3>
              <p className="text-[13px] leading-relaxed text-gray-600">{step.desc}</p>
            </div>
          ))}
        </MobileCarousel>

        <motion.div
          className="hidden md:grid md:grid-cols-4 gap-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative flex flex-col items-start md:items-center text-left md:text-center px-6 py-8"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-white/20" />
              )}

              {/* Number bubble */}
              <div className="relative z-10 w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center mb-5 bg-primary shrink-0">
                <span className="text-accent font-bold text-sm">{step.number}</span>
              </div>

              <h3 className="font-bold text-base mb-2">{step.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
