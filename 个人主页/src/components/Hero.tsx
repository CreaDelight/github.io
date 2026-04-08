import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#1A1A1A]">
      {/* Particle Effect Overlay */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tighter">
            李柏松
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-light">
            软件工程师 <span className="text-secondary mx-2">|</span> 用代码构建数字世界
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['React', 'Node.js', 'Python', 'TypeScript'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-accent border-accent/20"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              查看我的作品
            </a>
            <a href="#contact" className="btn-secondary flex items-center gap-2">
              联系我
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
