import React from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown, Twitter, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start gap-12">
      <div className="relative">
        <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg border-4 border-white">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pkeQLxaPKZrL0Naua8g4Wk1Y1fbOMJ6Ymw&s" 
            alt="Harry Hoang" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="flex-grow text-center md:text-left">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Harry Hoang</h1>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <SocialIcon icon={<Twitter size={20} />} href="#" />
          <SocialIcon icon={<Github size={20} />} href="#" />
          <SocialIcon icon={<Linkedin size={20} />} href="#" />
          <SocialIcon icon={<GraduationCap size={20} />} href="#" />
          <SocialIcon icon={<Mail size={20} />} href="#" />
        </div>
      </div>

      <div className="flex-shrink-0">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all shadow-sm">
          <Globe size={16} />
          <span>English</span>
          <ChevronDown size={14} className="text-slate-400" />
        </button>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
  >
    {icon}
  </a>
);
