"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut"
    }
  }),
};

const InvestmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="investments"
      className="py-16 px-4 text-white text-center"
      ref={ref}
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          variants={fadeUpVariant}
          custom={0}
        >
          Empiria Strategic Fund
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-10 leading-relaxed"
          variants={fadeUpVariant}
          custom={1}
        >
          A high-conviction personal fund that has{" "}
          <span className="font-semibold text-green-400">
            outperformed the S&amp;P 500 by +27.8% with returns of 80.2% compared to S&amp;P 500 returns of 51.52%
          </span>{" "}
          since inception (Sep 2023 – Sep 2025).
        </motion.p>
        <motion.img
          src="images/Empiria-memo.png"
          alt="Empiria Memo Preview"
          className="mb-7 max-h-96 mx-auto rounded-lg shadow-lg"
          variants={fadeUpVariant}
          custom={2}
        />

        <div className="mt-8 mb-8">
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-6">
            {[
              {
                label: "Empiria's Cumulative Return",
                value: "+80.20%",
              },
              {
                label: "S&P 500 Cumulative Return",
                value: "+51.12%",
              },
              {
                label: "Alpha vs S&P 500",
                value: "+27.82%",
              },
              {
                label: "Sharpe Ratio",
                value: "1.3",
              },
              {
                label: "Sortino Ratio",
                value: "1.3",
              },
              {
                label: "Standard Deviation",
                value: "1.6%",
              }
            ].map((item, i) => (
              <motion.a
                key={item.label}
                className="block rounded-lg border border-white/10 bg-white/5 p-5 shadow hover:bg-white/10 transition"
                variants={fadeUpVariant}
                custom={3 + i}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="text-sm text-white/68">{item.label}</div>
                <div className="mt-1 text-m font-bold">{item.value}</div>
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.a
          href="/Empiria-Investment-Memo.pdf"
          download
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          variants={fadeUpVariant}
          custom={3}
        >
          📄 Download Investment Memo (PDF)
        </motion.a>
      </motion.div>
    </section>
  );
};

export default InvestmentSection;
