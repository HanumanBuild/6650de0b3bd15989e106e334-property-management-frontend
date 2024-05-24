import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

function Services() {
  const [formData, setFormData] = useState({
    propertyId: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/service-request', formData);
      console.log('Service request submitted:', response.data);
    } catch (error) {
      console.error('Error submitting service request:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-4">Our Services</h1>
      <p className="text-lg mb-4">We offer a range of services to manage your properties effectively.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Property ID</label>
          <input
            type="text"
            name="propertyId"
            value={formData.propertyId}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
      </form>
    </div>
  );
}

export default Services;