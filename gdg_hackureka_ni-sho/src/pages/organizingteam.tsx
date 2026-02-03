import { motion } from 'framer-motion';

interface Person {
  name: string;
  role: string;
  phone: string;
}

const OrganizingTeam = () => {
  const teachers: Person[] = [
    { name: "Dr. Amit Bindal", role: "Professor (CSE)", phone: "+91 8059930868" },
    { name: "Dr. Vishal Gupta", role: "Sr. Assistant Professor (CSE)", phone: "+91 7988367291" },
    { name: "Mr. Ankur Mangla", role: "Assistant Professor (CSE)", phone: "+91 8059930869" },
  ];

  const students: Person[] = [
    { name: "Hemish", role: "Lead Organizer", phone: "+91 9996142844" },
    { name: "Kartavaya Jain", role: "Core Team Member", phone: "+91 8901522712" },
    { name: "Abhinav", role: "Core Team Member", phone: "+91 9499417601" },
  ];

  const Card = ({ person }: { person: Person }) => (
    <motion.div 
      whileHover={{ scale: 1.03, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden bg-black/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl shadow-2xl h-full flex flex-col justify-between"
    >
      {/* The "Katana Slash" Flame Effect */}
      <div className="absolute top-0 left-0 w-1.5 h-full overflow-hidden">
        <motion.div 
           animate={{ y: ["0%", "-50%", "0%"] }}
           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           className="w-full h-[200%] bg-linear-to-b from-red-600 via-orange-400 to-red-900 shadow-[0_0_20px_#dc2626]"
        />
      </div>
      
      {/* Background Seal Pattern */}
      <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-20 transition-all duration-500">
        <div className="w-32 h-32 border-12 border-red-600 rounded-full rotate-12" />
      </div>

      <div className="relative z-10">
        <h4 className="text-white font-impact text-2xl tracking-wider uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-tight">
          {person.name}
        </h4>
        <div className="w-12 h-0.5 bg-red-600 my-3 group-hover:w-20 transition-all duration-300" />
        <p className="text-red-500 font-bold italic text-sm tracking-wide uppercase">
          {person.role}
        </p>
      </div>

      <div className="relative z-10 mt-6">
        <a 
          href={`tel:${person.phone}`} 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono bg-white/5 px-3 py-2 rounded-lg border border-white/10 group-hover:border-red-500/50"
        >
          <span className="text-red-500 font-bold">»</span> {person.phone}
        </a>
      </div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden bg-[#050505]">
      {/* Breathing Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-125 h-125 bg-red-900/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-150 h-150 bg-purple-900/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-9xl font-impact text-white uppercase tracking-tighter"
          >
            THE <span className="text-red-600 drop-shadow-[0_0_30px_#dc2626]">HASHIRAS</span>
          </motion.h2>
          <p className="text-gray-500 font-impact tracking-[0.5em] mt-2 uppercase text-sm md:text-base">MMEC Organizing Corps</p>
        </header>

        {/* Faculty Masters - 3 Columns */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-3xl font-impact text-white uppercase tracking-widest whitespace-nowrap">Faculty Masters</h3>
            <div className="h-px grow bg-linear-to-r from-red-600 via-red-900 to-transparent shadow-[0_0_10px_#dc2626]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map((t, i) => <Card key={i} person={t} />)}
          </div>
        </div>

        {/* Student Corps - 3 Columns */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-3xl font-impact text-white uppercase tracking-widest whitespace-nowrap">Student Corps</h3>
            <div className="h-px grow bg-linear-to-r from-red-600 via-red-900 to-transparent shadow-[0_0_10px_#dc2626]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {students.map((s, i) => <Card key={i} person={s} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizingTeam;