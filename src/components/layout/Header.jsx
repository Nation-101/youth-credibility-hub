import React, { useEffect, useState } from 'react';
import { Shield, Users } from 'lucide-react';
import { platformStats } from '../../data/platformStats';


const Header = () => {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    let start = 0;
    const end = platformStats.totalActiveYouth;
    if (start === end) return;

    let duration = 1500;
    let stepTime = Math.abs(Math.floor(duration / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Branding */}
        

        {/* Stats & CTA */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
            <Users className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              {count.toLocaleString()} Active Youth
            </span>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition-transform">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
