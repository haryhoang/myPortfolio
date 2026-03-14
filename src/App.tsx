/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CourseSection } from './components/CourseSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <CourseSection />
        
        {/* Additional sections can be added here */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center border-t border-slate-100">
          <p className="text-slate-400 text-sm">
            © 2026 Harry Hoang. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  );
}

