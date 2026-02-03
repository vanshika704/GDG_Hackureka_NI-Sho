import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DownloadWidget = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownloadPPT = () => {
    const pptUrl = "/hackathon-presentation.pptx"; // Ensure this is in your public folder
    const link = document.createElement("a");
    link.href = pptUrl;
    link.download = "Hackureka_II_Guidelines.pptx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  const openCanva = () => {
    window.open("https://www.canva.com/design/DAG_l1eRlj8/4TVY3zukrgx3q82brwCWNQ/edit", "_blank");
    setShowModal(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100]"
      >
        <button
          onClick={() => setShowModal(true)}
          className="relative flex items-center justify-center w-16 h-16 bg-black border-2 border-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.6)] group"
        >
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-red-600 rounded-full"
          />
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
      </motion.div>

      {/* Choice Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: 45 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-[#0a0a0a] border-t-4 border-red-600 p-8 shadow-[0_0_50px_rgba(220,38,38,0.2)]"
            >
              <h3 className="text-3xl font-impact text-white uppercase tracking-widest text-center mb-2">
                Select Your <span className="text-red-600">Scroll</span>
              </h3>
              <p className="text-gray-500 text-center font-mono text-xs mb-8 uppercase tracking-tighter">
                Choose your method of preparation
              </p>

              <div className="flex flex-col gap-4">
                {/* Canva Option */}
                <button
                  onClick={openCanva}
                  className="group relative flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-red-600 transition-all overflow-hidden"
                >
                  <div className="relative z-10">
                    <span className="block text-white font-impact text-xl tracking-tight uppercase">Canva Link</span>
                    <span className="text-[10px] text-gray-500 uppercase">Interactive Digital View</span>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-600 translate-x-full group-hover:translate-x-0 transition-transform" />
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </button>

                {/* PPT Option */}
                <button
                  onClick={handleDownloadPPT}
                  className="group relative flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-red-600 transition-all overflow-hidden"
                >
                  <div className="relative z-10">
                    <span className="block text-white font-impact text-xl tracking-tight uppercase">Download PPT</span>
                    <span className="text-[10px] text-gray-400 uppercase">Offline Presentation file</span>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-600 translate-x-full group-hover:translate-x-0 transition-transform" />
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </button>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setShowModal(false)}
                className="mt-8 w-full text-gray-600 hover:text-white font-impact text-sm tracking-[0.3em] transition-colors"
              >
                [ CLOSE_WINDOW. ]
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DownloadWidget;