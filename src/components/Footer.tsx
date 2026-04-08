import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-[#0A1628] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter">
            李柏松<span className="text-accent">.</span>
          </a>
          <p className="text-sm text-gray-400 font-medium">
            © {currentYear} 李柏松. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent/20 transition-all group">
            <Github size={20} className="text-gray-400 group-hover:text-accent transition-colors" />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-secondary/20 transition-all group">
            <Linkedin size={20} className="text-gray-400 group-hover:text-secondary transition-colors" />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent/20 transition-all group">
            <Mail size={20} className="text-gray-400 group-hover:text-accent transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
