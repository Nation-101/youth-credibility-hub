import React, { useState } from 'react';
import { Plus, Filter, TrendingUp, Star } from 'lucide-react';
import BusinessCard from './BusinessCard';
import BusinessFilters from './BusinessFilters';
import AddBusinessForm from './AddBusinessForm';

const BusinessesTab = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [businesses, setBusinesses] = useState([
    {
      id: 1,
      name: "EcoClean Services",
      owner: "Thabo Mthembu",
      age: 19,
      category: "Environment",
      description: "Eco-friendly cleaning services for homes and offices using sustainable products.",
      location: "Johannesburg",
      founded: "2024",
      employees: "3-5",
      revenue: "R15,000-R30,000/month",
      contact: "thabo@ecoclean.co.za",
      verified: true,
      rating: 4.8,
      reviews: 24,
      website: "www.ecoclean.co.za",
      image: "🌿"
    },
    {
      id: 2,
      name: "Tech Tutors SA",
      owner: "Nomsa Dlamini",
      age: 20,
      category: "Education",
      description: "Online coding and digital literacy tutoring for high school students.",
      location: "Cape Town",
      founded: "2023",
      employees: "2-3",
      revenue: "R8,000-R15,000/month",
      contact: "nomsa@techtutors.co.za",
      verified: true,
      rating: 4.9,
      reviews: 31,
      website: "www.techtutors.co.za",
      image: "💻"
    },
    {
      id: 3,
      name: "Fresh Threads Design",
      owner: "Katlego Molefe",
      age: 18,
      category: "Fashion",
      description: "Custom streetwear and graphic design services for young South Africans.",
      location: "Pretoria",
      founded: "2024",
      employees: "1-2",
      revenue: "R5,000-R12,000/month",
      contact: "katlego@freshthreads.co.za",
      verified: false,
      rating: 4.6,
      reviews: 12,
      website: "www.freshthreads.co.za",
      image: "👕"
    },
    {
      id: 4,
      name: "GrowLocal Herbs",
      owner: "Sipho Ndaba",
      age: 21,
      category: "Agriculture",
      description: "Organic herb farming and supply to local restaurants and markets.",
      location: "Durban",
      founded: "2023",
      employees: "2-3",
      revenue: "R10,000-R20,000/month",
      contact: "sipho@growlocal.co.za",
      verified: true,
      rating: 4.7,
      reviews: 18,
      website: "www.growlocal.co.za",
      image: "🌱"
    }
  ]);

  const addBusiness = (newBusiness) => {
    const business = {
      ...newBusiness,
      id: businesses.length + 1,
      verified: false,
      rating: 0,
      reviews: 0,
      founded: new Date().getFullYear().toString()
    };
    setBusinesses([...businesses, business]);
    setShowAddForm(false);
  };

  const getStats = () => {
    const totalBusinesses = businesses.length;
    const verifiedBusinesses = businesses.filter(b => b.verified).length;
    const avgRating = businesses.reduce((sum, b) => sum + b.rating, 0) / totalBusinesses;
    
    return { totalBusinesses, verifiedBusinesses, avgRating };
  };

  const stats = getStats();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Youth Businesses</h2>
        <p className="text-gray-600">Support young entrepreneurs building the future of South Africa</p>
      </div>

      {/* Stats Bar */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-600">{stats.totalBusinesses}</div>
            <div className="text-gray-600">Youth Businesses</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">{stats.verifiedBusinesses}</div>
            <div className="text-gray-600">Verified</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">{stats.avgRating.toFixed(1)}</div>
            <div className="text-gray-600">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-gray-600">
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Discover and support young entrepreneurs</span>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>List My Business</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <BusinessFilters onFilterChange={(filters) => console.log('Filters:', filters)} />
      )}

      {/* Businesses Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>

      {/* Add Business Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-96 overflow-y-auto">
            <AddBusinessForm 
              onSubmit={addBusiness}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
        <div className="text-center">
          <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Why Support Youth Businesses?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Youth entrepreneurs drive innovation and create jobs in their communities. 
            By supporting young business owners, you're investing in South Africa's economic future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessesTab;