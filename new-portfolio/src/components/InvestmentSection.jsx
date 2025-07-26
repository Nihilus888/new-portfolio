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
            outperformed the S&amp;P 500 by +22.64% with returns of 71.68% compared to S&amp;P 500 returns of 48.64%
          </span>{" "}
          since inception (Sep 2023 – Jul 2025).
        </motion.p>
        <motion.img
          src="images/Empiria-memo.png"
          alt="Empiria Memo Preview"
          className="mb-7 max-h-96 mx-auto rounded-lg shadow-lg"
          variants={fadeUpVariant}
          custom={2}
        />
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
