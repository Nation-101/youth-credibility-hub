import React, { useState } from 'react';
import { Plus, Filter, MapPin, Calendar } from 'lucide-react';
import EventCard from './EventCard';
import EventFilters from './EventFilters';
import AddEventForm from './AddEventForm';

const EventsTab = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Youth Climate Action Workshop",
      date: "2025-09-15",
      time: "14:00",
      location: "Johannesburg Central Library",
      organizer: "Green Future Youth",
      category: "Workshop",
      description: "Learn about climate change and how young people can make a difference in their communities.",
      verified: true,
      attendees: 45,
      maxAttendees: 60
    },
    {
      id: 2,
      title: "Coding Bootcamp for Beginners",
      date: "2025-09-20",
      time: "09:00",
      location: "Innovation Hub Pretoria",
      organizer: "Code4Youth SA",
      category: "Education",
      description: "Free 3-day coding bootcamp covering HTML, CSS, and JavaScript basics.",
      verified: true,
      attendees: 28,
      maxAttendees: 30
    },
    {
      id: 3,
      title: "Young Entrepreneurs Networking",
      date: "2025-09-25",
      time: "18:00",
      location: "Cape Town Startup Hub",
      organizer: "Youth Business Network",
      category: "Networking",
      description: "Connect with other young entrepreneurs and learn from successful business owners.",
      verified: false,
      attendees: 12,
      maxAttendees: 50
    }
  ]);

  const addEvent = (newEvent) => {
    const event = {
      ...newEvent,
      id: events.length + 1,
      verified: false,
      attendees: 0
    };
    setEvents([...events, event]);
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Events & Opportunities</h2>
        <p className="text-gray-600">Discover verified youth events and opportunities in South Africa</p>
      </div>

      {/* Action Bar */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">{events.length} Events Available</span>
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
              <span>Add Event</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <EventFilters onFilterChange={(filters) => console.log('Filters:', filters)} />
      )}

      {/* Events Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Add Event Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-96 overflow-y-auto">
            <AddEventForm 
              onSubmit={addEvent}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsTab;