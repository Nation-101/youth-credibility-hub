import React from 'react';
import { Shield, Heart, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-purple-100 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-900">Youth Hub</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering young people with media literacy skills and real opportunities to grow, 
              create, and make a positive impact in their communities.
            </p>
          </div>

          {/* For Youth */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Heart className="w-4 h-4 text-purple-600" />
              <span>For Youth</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Learn Media Literacy</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Find Safe Events</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Showcase Your Business</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Connect with Peers</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Build Digital Skills</li>
            </ul>
          </div>

          {/* Safety & Trust */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Safety First</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All events verified</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Scam protection</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Community moderation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Privacy protection</span>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>Community</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-purple-600 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Community Guidelines</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Contact Support</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Feedback</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Report Issue</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-100 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                Built by youth, for youth. Making information literacy practical and empowering.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>© {currentYear} Youth Hub</span>
              <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;