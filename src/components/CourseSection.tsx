import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PdfCard } from './PdfCard';
import { Course } from '../types';

const COURSES: Course[] = [
  {
    id: '1',
    code: 'CS 230',
    title: 'Lecture Note 01',
    subtitle: 'Quantum Computing',
    topics: [
      'Introduction to Algebra and Quantum Bit'
    ],
    illustration: 'https://1qbit.com/wp-content/uploads/2021/06/1QBit-Blog-A-Bit-or-Two-About-Qubits.png',
    category: 'Quantum Computing',
    folderUrl: 'https://github.com/afshinea/stanford-cs-230-deep-learning',
    webUrl: 'https://stanford.edu/~shervine/teaching/cs-230/cheatsheet-convolutional-neural-networks'
  },
  {
    id: '2',
    code: 'CME 102',
    title: 'Lecture Note 03',
    subtitle: 'Quantum Computing',
    topics: [
      
    ],
    illustration: 'https://www.techexplorist.com/wp-content/uploads/2020/11/tailor-made-molecular-qubits.jpg',
    category: 'Quantum Computing',
    folderUrl: 'https://github.com/afshinea/stanford-cme-102-ordinary-differential-equations',
    webUrl: 'https://stanford.edu/~shervine/teaching/cme-102/cheatsheet-ordinary-differential-equations'
  },
  {
    id: '3',
    code: 'CME 106',
    title: '2nd Complementary of binary number Understanding',
    subtitle: 'Introduction to Digital Circuits',
    topics: [
      'A deeper look into binary representation and modular arithmetic'
  
    ],
    illustration: 'https://www.electrical4u.com/images/february16/1455995997.gif',
    category: 'Introduction to Digital Circuits',
    folderUrl: 'https://github.com/haryhoang/myPortfolio/blob/main/Pdf/2nd%20Complementary%2C%20binary%20number.pdf',
    webUrl: ''
  }
];

export const CourseSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Materials');
  const filters = ['All Materials', 'Quantum Computing', 'Statistics and Probability', 'Introduction to Digital Circuits'];

  const filteredCourses = activeFilter === 'All Materials' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeFilter);

  return (
    <section id="lecture-notes" className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Course Materials</h2>
        <p className="text-lg text-slate-500 font-light">
          Here are my current lecture series and study guides covering fundamental topics in mathematics, computer science, and engineering.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all border ${
              activeFilter === filter
                ? 'bg-[#333] text-white border-[#333]'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="relative group">
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {filteredCourses.map(course => (
            <div key={course.id} className="snap-start">
              <PdfCard 
                title={course.title}
                topics={course.topics}
                subTitle={course.subtitle}
                illustration={course.illustration}
                folderUrl={course.folderUrl}
                webUrl={course.webUrl}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all opacity-0 group-hover:opacity-100 hidden lg:flex">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all opacity-0 group-hover:opacity-100 hidden lg:flex">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

