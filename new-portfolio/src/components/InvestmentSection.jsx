"use client";
import React from 'react';

const InvestmentSection = () => {
    return (
        <section id="investments" className="py-16 px-4 text-white text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Empiria Strategic Fund
                </h2>
                <p className="text-lg md:text-xl mb-10 leading-relaxed">
                    A high-conviction personal fund that has <span className="font-semibold text-green-400">outperformed the S&P 500 by +15.63%</span> since inception (Sep 2023 – Jun 2025).
                </p>
                <img 
                    src="images/Empiria-memo.png"
                    alt="Empiria Memo Preview"
                    className="mb-7 max-h-96 mx-auto rounded-lg shadow-lg">
                </img>
                <a 
                    href="/Empiria-Investment-Memo.pdf" 
                    download 
                    className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    📄 Download Investment Memo (PDF)
                </a>
            </div>
        </section>
    );
};

export default InvestmentSection;
