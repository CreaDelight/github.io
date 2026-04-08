import { motion } from 'framer-motion';
import { Code2, Server, Laptop, Cpu } from 'lucide-react';

const skillsData = [
  {
    category: '前端技术',
    icon: <Laptop className="text-accent" />,
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: '后端技术',
    icon: <Server className="text-secondary" />,
    skills: [
      { name: 'Node.js / Express', level: 80 },
      { name: 'Python / Django', level: 70 },
      { name: 'Java / Spring Boot', level: 65 },
      { name: 'Go', level: 60 },
    ],
  },
  {
    category: '数据库 & 其他',
    icon: <Cpu className="text-accent" />,
    skills: [
      { name: 'PostgreSQL / MySQL', level: 85 },
      { name: 'Redis / MongoDB', level: 75 },
      { name: 'Docker / K8s', level: 70 },
      { name: 'AWS / Azure', level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <Code2 className="text-accent" size={40} /> 技能专长
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            我的技术栈主要集中在Web全栈开发，涵盖了前端工程化、后端架构设计及云计算服务。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-xs font-bold text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
