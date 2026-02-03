import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DownloadWidget = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownloadPPT = () => {
    const pptUrl = "/Hackureka 2.0 PPT Template.pptx"; 
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

  // New function for WhatsApp
  const joinWhatsApp = () => {
    window.open("https://chat.whatsapp.com/HlCxgTgN3II3ahQbmsfqXi", "_blank");
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
                {/* WhatsApp Option */}
                <button
                  onClick={joinWhatsApp}
                  className="group relative flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-green-500 transition-all overflow-hidden"
                >
                  <div className="relative z-10">
                    <span className="block text-white font-impact text-xl tracking-tight uppercase">Join Community</span>
                    <span className="text-[10px] text-gray-500 uppercase">Official WhatsApp Group</span>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-green-500 translate-x-full group-hover:translate-x-0 transition-transform" />
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </button>

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