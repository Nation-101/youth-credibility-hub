import React, { useState } from 'react';
import { Calendar, TrendingUp, Sparkles } from 'lucide-react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import CredibilityTab from '../credibility/CredibilityTab';
import SourcesTab from '../sources/SourcesTab';
import EventsTab from '../events/EventsTab';
import BusinessesTab from '../businesses/BusinessesTab';

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState('credibility');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'credibility':
        return <CredibilityTab />;
      case 'sources':
        return <SourcesTab />;
      case 'events':
        return <EventsTab />;
      case 'businesses':
        return <BusinessesTab />;
      default:
        return <CredibilityTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-6xl mx-auto px-6 py-8">
        {renderActiveTab()}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;