import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SpokenSilenceAccess = () => {
  const [accessKey, setAccessKey] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Handle access key validation here
    console.log('Access key:', accessKey);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Spoken Silence
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Express the unspoken through digital flowers and heartfelt messages
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full border border-gray-700">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Have an Access Key?
          </h2>
          <p className="text-gray-600 text-sm">
            Enter the unique access key below to view a shared flower card
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Enter access key"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              className="w-full px-4 py-3 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
          >
            View
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Don't have an access key?{' '}
          <a 
            onClick={() => navigate("/Signin")}
            className="text-purple-600 font-medium hover:text-purple-800 transition-colors"
          >
            Create your own flower message
          </a>
        </p>
      </div>
    </div>
  );
};

export default SpokenSilenceAccess;