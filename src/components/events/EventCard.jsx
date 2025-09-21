import React from 'react';
import { Calendar, Clock, MapPin, Users, CheckCircle, AlertTriangle } from 'lucide-react';

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'workshop': return 'bg-blue-100 text-blue-800';
      case 'education': return 'bg-green-100 text-green-800';
      case 'networking': return 'bg-purple-100 text-purple-800';
      case 'volunteer': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityStatus = () => {
    const spotsLeft = event.maxAttendees - event.attendees;
    if (spotsLeft <= 0) return { text: 'Full', color: 'text-red-600' };
    if (spotsLeft <= 5) return { text: `${spotsLeft} spots left`, color: 'text-orange-600' };
    return { text: `${spotsLeft} spots available`, color: 'text-green-600' };
  };

  const availability = getAvailabilityStatus();

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-6 hover:shadow-xl transition-all duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
            {event.verified ? (
              <div className="flex items-center space-x-1 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-xs font-medium">Verified</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1 text-orange-600">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-medium">Pending</span>
              </div>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
          <p className="text-sm text-gray-600">by {event.organizer}</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{formatDate(event.date)}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{event.time}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{event.location}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span className="text-sm">{event.attendees}/{event.maxAttendees} attending</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{event.description}</p>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium ${availability.color}`}>
          {availability.text}
        </span>
        
        <button 
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
          disabled={event.attendees >= event.maxAttendees}
        >
          {event.attendees >= event.maxAttendees ? 'Full' : 'Join Event'}
        </button>
      </div>
    </div>
  );
};

export default EventCard;