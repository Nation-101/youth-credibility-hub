import React from 'react';
import { CheckCircle, AlertTriangle, Eye, Search, Users, Calendar } from 'lucide-react';

const VerificationGuide = () => {
  const verificationSteps = [
    {
      icon: Search,
      title: "Check the Domain",
      description: "Look for suspicious URLs, misspellings, or unusual extensions (.co instead of .com)",
      examples: ["✅ bbc.com", "❌ bbc-news.co", "❌ bbcnews.net"]
    },
    {
      icon: Users,
      title: "Find the About Page",
      description: "Legitimate sources have clear information about their organization, staff, and contact details",
      examples: ["✅ Staff bios listed", "✅ Physical address", "❌ No contact info"]
    },
    {
      icon: Calendar,
      title: "Check Publication Date",
      description: "Ensure articles are recent and regularly updated. Old news presented as current is a red flag",
      examples: ["✅ Recent timestamps", "✅ Regular updates", "❌ No dates shown"]
    },
    {
      icon: Eye,
      title: "Examine the Content",
      description: "Look for professional writing, proper sources cited, and balanced reporting",
      examples: ["✅ Multiple sources", "✅ Expert quotes", "❌ Opinion as fact"]
    }
  ];

  const redFlags = [
    "Sensational headlines with ALL CAPS",
    "No author byline or contact information",
    "Excessive ads or clickbait content",
    "Claims without citing sources",
    "Poor grammar and spelling",
    "Extreme political bias",
    "Conspiracy theories presented as fact"
  ];

  const greenFlags = [
    "Professional design and layout",
    "Clear author credentials",
    "Multiple sources cited",
    "Balanced reporting",
    "Regular fact-checking",
    "Transparent funding/ownership",
    "Professional editorial standards"
  ];

  return (
    <div className="space-y-6">
      {/* Verification Steps */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-6 text-center">🔍 How to Verify Any Source</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {verificationSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Step {index + 1}: {step.title}</h4>
                </div>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="space-y-1">
                  {step.examples.map((example, i) => (
                    <div key={i} className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Red Flags vs Green Flags */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            <span>🚨 Red Flags</span>
          </h3>
          <ul className="space-y-3">
            {redFlags.map((flag, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{flag}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <span>✅ Green Flags</span>
          </h3>
          <ul className="space-y-3">
            {greenFlags.map((flag, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerificationGuide;