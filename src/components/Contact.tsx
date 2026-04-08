import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send, Copy, Check, Download } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'libaisong@example.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <MessageSquare className="text-accent" size={40} /> 联系我
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            有有趣的项目想合作？或者只是想聊聊技术？欢迎随时联系！
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-10 rounded-3xl w-full max-w-lg"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="p-4 bg-accent/10 rounded-full">
                <Mail size={48} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">发送邮件</h3>
                <p className="text-gray-400 mb-6">随时可以通过邮箱与我取得联系</p>
                <div className="flex flex-col items-center gap-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity" />
                    <button
                      onClick={handleCopy}
                      className="relative glass px-6 py-3 rounded-lg flex items-center gap-3 text-white font-medium hover:text-accent transition-colors"
                    >
                      {email}
                      {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                  <a href={`mailto:${email}`} className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send size={18} /> 发送邮件
                  </a>
                  <button className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Download size={18} /> 下载简历 (PDF)
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white mb-4">社交平台</h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { label: 'GitHub', icon: <Github />, href: '#', color: 'hover:bg-[#333]' },
                { label: 'LinkedIn', icon: <Linkedin />, href: '#', color: 'hover:bg-[#0077B5]' },
                { label: 'Twitter', icon: <MessageSquare />, href: '#', color: 'hover:bg-[#1DA1F2]' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, translateY: -5 }}
                  className={`glass p-4 rounded-2xl flex items-center gap-3 transition-all ${social.color}`}
                >
                  {social.icon}
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
