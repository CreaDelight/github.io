import { motion } from 'framer-motion';
import { ExternalLink, Github, Briefcase } from 'lucide-react';
import { cn } from '../utils/cn';

const projects = [
  {
    title: '电商平台重构',
    description: '主导前端架构升级，性能提升60%，用户转化率提升25%。使用React + Next.js实现SEO优化。',
    tech: ['React', 'Next.js', 'Redux'],
    image: 'https://via.placeholder.com/600x400/1A1A1A/FFFFFF?text=E-commerce+Platform',
    link: '#',
    github: '#',
    size: 'large',
  },
  {
    title: '数据分析仪表盘',
    description: '为金融客户构建实时数据可视化系统，支持千万级数据处理。使用D3.js和ECharts展示多维数据。',
    tech: ['D3.js', 'ECharts', 'Node.js'],
    image: 'https://via.placeholder.com/300x400/1A1A1A/FFFFFF?text=Data+Dashboard',
    link: '#',
    github: '#',
    size: 'small',
  },
  {
    title: 'AI 聊天机器人',
    description: '集成OpenAI API的智能客服系统，支持多语言交互和知识库检索。',
    tech: ['Python', 'OpenAI', 'React'],
    image: 'https://via.placeholder.com/300x400/1A1A1A/FFFFFF?text=AI+Chatbot',
    link: '#',
    github: '#',
    size: 'small',
  },
  {
    title: '移动社交应用',
    description: '跨平台移动端应用开发，实现即时通讯和动态分享功能。',
    tech: ['React Native', 'Firebase'],
    image: 'https://via.placeholder.com/600x400/1A1A1A/FFFFFF?text=Social+App',
    link: '#',
    github: '#',
    size: 'large',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <Briefcase className="text-accent" size={40} /> 作品展示
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            精选了部分我参与过的项目，涵盖了Web开发、移动端应用及数据处理。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={cn(
                'group relative overflow-hidden rounded-2xl glass hover:border-accent/50 transition-all duration-500',
                project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
              )}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
              </div>

              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-accent"
                  >
                    <ExternalLink size={16} /> 查看详情
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-accent"
                  >
                    <Github size={16} /> 仓库
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
