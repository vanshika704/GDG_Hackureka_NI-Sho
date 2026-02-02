import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // install lucide-react or use text +/-

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "WHO CAN ENTER THE ARENA?",
    answer: "ANYONE WITH THE WILL TO COMPETE. OPEN TO ALL STUDENTS FROM RECOGNIZED INSTITUTIONS. BRING YOUR OWN GEAR OR USE THE SYSTEM TERMINALS PROVIDED."
  },
  {
    question: "IS THERE AN ENTRY FEE?",
    answer: "ACCESS TO THE DIGITAL REALM IS FREE. REGISTRATION IS MANDATORY TO SECURE YOUR SLOT IN THE PRELIMINARY ROUNDS."
  },
  {
    question: "WHAT ARE THE SYSTEM REQUIREMENTS?",
    answer: "FOR THE ONLINE ROUND, A STABLE INTERNET CONNECTION AND A MODERN BROWSER ARE REQUIRED. WE RECOMMEND A NEURAL LINK OF AT LEAST 100MBPS."
  },
  {
    question: "WHERE IS THE FINAL BATTLE?",
    answer: "THE PHYSICAL MANIFESTATION TAKES PLACE AT MAHARISHI MARKANDESHWAR UNIVERSITY, MULLANA. COORDINATES WILL BE SENT TO FINALISTS."
  }
];

const FAQCard = ({ faq, isOpen, toggle }: { faq: FAQItem, isOpen: boolean, toggle: () => void }) => {
  return (
    <div className={`mb-4 border-l-2 transition-colors duration-300 ${isOpen ? 'border-red-600' : 'border-white/10'}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-left group"
      >
        <span className={`text-lg md:text-xl font-black uppercase italic tracking-tighter transition-colors ${isOpen ? 'text-red-500' : 'text-white'}`}>
          {faq.question}
        </span>
        <div className={`flex items-center justify-center w-8 h-8 border rotate-45 transition-all duration-500 ${isOpen ? 'border-red-600 bg-red-600' : 'border-white/20'}`}>
          <motion.div animate={{ rotate: isOpen ? -45 : 0 }} className="-rotate-45">
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-neutral-400 font-sans text-sm tracking-widest leading-relaxed uppercase">
              <div className="w-full h-[1px] bg-gradient-to-r from-red-600/50 to-transparent mb-4" />
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SlayerFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 bg-[#020202] text-white font-['Impact', sans-serif]">
      {/* DECORATIVE ACCENT */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <header className="mb-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="flex items-center gap-3 mb-4 font-mono text-[10px] tracking-[0.5em] text-red-500 uppercase font-black"
          >
             <div className="w-8 h-[2px] bg-red-600 shadow-[0_0_10px_#f00]" /> DATA_QUERY: FREQUENT
          </motion.div>
          <h2 className="text-5xl md:text-7xl uppercase italic leading-[0.9] tracking-tighter">
            COMMON <span className="text-red-600 drop-shadow-[0_0_15px_#f00]">Intel</span>
          </h2>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQCard 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* FOOTER CALL TO ACTION */}
        <footer className="mt-20 border-t border-white/5 pt-10 text-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
            Still have questions? Contact the Command Center.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default SlayerFAQ;