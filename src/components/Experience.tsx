import { motion } from 'framer-motion';
import { History, Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: '高级前端工程师',
    company: '北京某知名互联网大厂',
    period: '2021 - 至今',
    description: [
      '主导前端团队的技术架构升级，性能提升60%',
      '开发了一套企业级前端组件库，服务于20+业务线',
      '优化了核心业务流程，用户转化率提升了25%',
    ],
    icon: <Briefcase className="text-accent" />,
  },
  {
    title: '全栈开发工程师',
    company: '上海某创业公司',
    period: '2018 - 2021',
    description: [
      '负责核心电商平台的前后端开发与维护',
      '从零构建了数据可视化系统，支持千万级数据处理',
      '成功带领团队完成移动端应用的研发工作',
    ],
    icon: <Briefcase className="text-secondary" />,
  },
  {
    title: '软件工程学士',
    company: '某知名科技大学',
    period: '2014 - 2018',
    description: [
      '主修课程：数据结构、算法分析、计算机网络',
      '获得校级优秀毕业生称号',
      '连续三年获得一等奖学金',
    ],
    icon: <Briefcase className="text-accent" />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <History className="text-accent" size={40} /> 工作经历
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            我的职业生涯始于对编程的热爱，并在不断的实践中提升我的技术深度。
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/50 to-secondary/50 rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={cn(
                  'flex flex-col md:flex-row items-center gap-12 relative',
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                )}
              >
                {/* Node Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary z-10 shadow-[0_0_15px_rgba(0,245,255,0.5)]" />

                <div className={cn(
                  'w-full md:w-1/2 flex flex-col',
                  i % 2 === 0 ? 'md:items-end text-right' : 'md:items-start text-left'
                )}>
                  <div className="glass p-8 rounded-3xl w-full max-w-lg hover:border-accent/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/5 rounded-xl">{exp.icon}</div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-accent mb-1 flex items-center gap-1">
                          <Calendar size={12} /> {exp.period}
                        </span>
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6 text-sm text-gray-400 font-medium">
                      <MapPin size={14} className="text-secondary" /> {exp.company}
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple utility if cn is not imported correctly
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default Experience;
