import { motion } from 'framer-motion';
import { User, Award, Code, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { label: '开发经验', value: '5年+', icon: <Code className="text-accent" /> },
    { label: '项目交付', value: '20+', icon: <Award className="text-secondary" /> },
    { label: '开源贡献', value: '10+', icon: <Globe className="text-accent" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity" />
            <div className="relative glass p-4 rounded-2xl">
              <img
                src="https://via.placeholder.com/300x400/1A1A1A/FFFFFF?text=Li+Baisong"
                alt="李柏松"
                className="rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        <div className="w-full md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
              <User className="text-accent" size={40} /> 关于我
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
              热爱技术的开发者，专注于打造高性能、用户体验优秀的Web应用。
              5年+全栈开发经验，相信好的代码应该像好的设计一样简洁优雅。
              我热衷于探索前沿技术，并将其转化为实际的产品价值。
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {['前端架构', '微服务', 'UI/UX设计', 'DevOps', '云原生'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass p-6 rounded-2xl text-center flex flex-col items-center"
                >
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
