import React, { useState } from 'react';
import { X, User, MapPin, Tag, DollarSign, Users, Globe, Mail } from 'lucide-react';

const AddBusinessForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    age: '',
    category: '',
    description: '',
    location: '',
    employees: '',
    revenue: '',
    contact: '',
    website: '',
    image: '🏢'
  });

  const [errors, setErrors] = useState({});

  const categories = [
    'Technology', 'Education', 'Fashion', 'Environment', 
    'Agriculture', 'Food', 'Services', 'Arts', 'Health', 'Finance'
  ];

  const employeeRanges = ['1', '2-3', '4-5', '6-10', '10+'];
  
  const revenueRanges = [
    'R0-R5,000/month',
    'R5,000-R15,000/month', 
    'R15,000-R30,000/month',
    'R30,000+/month'
  ];

  const businessEmojis = [
    '🏢', '💻', '📚', '🌿', '🍕', '👕', '🎨', '⚡', '🔧', '💡',
    '🌱', '📱', '🏪', '🚗', '🎯', '💰', '🎵', '📊', '🏋️', '✨'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Business name is required';
    if (!formData.owner.trim()) newErrors.owner = 'Owner name is required';
    if (!formData.age || formData.age < 13 || formData.age > 25) {
      newErrors.age = 'Age must be between 13-25 for youth businesses';
    }
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.employees) newErrors.employees = 'Employee count is required';
    if (!formData.revenue) newErrors.revenue = 'Revenue range is required';
    if (!formData.contact.trim()) newErrors.contact = 'Contact email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        age: parseInt(formData.age)
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">List Your Business</h3>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Business Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
              errors.name ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Amazing Youth Startup"
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Owner and Age */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 inline mr-1" />
              Owner Name
            </label>
            <input
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.owner ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Your Name"
            />
            {errors.owner && <p className="text-red-600 text-xs mt-1">{errors.owner}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="13"
              max="25"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.age ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="19"
            />
            {errors.age && <p className="text-red-600 text-xs mt-1">{errors.age}</p>}
          </div>
        </div>

        {/* Category and Location */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Tag className="w-4 h-4 inline mr-1" />
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.category ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-600 text-xs mt-1">{errors.category}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin className="w-4 h-4 inline mr-1" />
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.location ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Johannesburg"
            />
            {errors.location && <p className="text-red-600 text-xs mt-1">{errors.location}</p>}
          </div>
        </div>

        {/* Employees and Revenue */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Users className="w-4 h-4 inline mr-1" />
              Employees
            </label>
            <select
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.employees ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Select Range</option>
              {employeeRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.employees && <p className="text-red-600 text-xs mt-1">{errors.employees}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <DollarSign className="w-4 h-4 inline mr-1" />
              Monthly Revenue
            </label>
            <select
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.revenue ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Select Range</option>
              {revenueRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.revenue && <p className="text-red-600 text-xs mt-1">{errors.revenue}</p>}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
              errors.description ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="What does your business do? What services or products do you offer?"
          />
          {errors.description && <p className="text-red-600 text-xs mt-1">{errors.description}</p>}
        </div>

        {/* Contact and Website */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4 inline mr-1" />
              Contact Email
            </label>
            <input
              type="email"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.contact ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
            {errors.contact && <p className="text-red-600 text-xs mt-1">{errors.contact}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Globe className="w-4 h-4 inline mr-1" />
              Website (Optional)
            </label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="www.yourbusiness.co.za"
            />
          </div>
        </div>

        {/* Business Icon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Business Icon
          </label>
          <div className="grid grid-cols-10 gap-2">
            {businessEmojis.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, image: emoji }))}
                className={`w-10 h-10 text-xl rounded-lg border-2 hover:bg-gray-50 transition-colors ${
                  formData.image === emoji 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Submit for Review
          </button>
        </div>
      </form>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 text-xs">
          🔍 Note: All business listings require verification to ensure authenticity. 
          You'll receive an email once your listing is reviewed (usually within 24-48 hours).
        </p>
      </div>
    </div>
  );
};

export default AddBusinessForm;