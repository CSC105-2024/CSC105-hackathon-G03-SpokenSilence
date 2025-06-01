import React, { useState } from 'react';
import { useFlower } from "@/contexts/flower-context.jsx";

const SpokenSilenceAccess = ({ id }) => {
  const { checkAccessKey } = useFlower();
  const [accessKey, setAccessKey] = useState('');
  const [locked, setLocked] = useState(false);
  const { flower } = useFlower();
  console.log(flower)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      flower_id: id,
      access_key: accessKey
    };
    try {
      const response = await checkAccessKey(payload);
      if (response) {
        setLocked(true);
      }
    } catch (error) {
      console.error("checkAccessKey failed:", error);
    }
  };

  if (!locked) {
    return (
        <div className="bg-white flex flex-col items-center justify-center mt-3">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Spoken Silence
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Express the unspoken through digital flowers and heartfelt messages
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
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
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-gray-700 placeholder-gray-400"
                />
              </div>

              <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
              >
                View
              </button>
            </div>
          </form>
        </div>
    );
  }

  return (
      <div className="bg-white flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full">
          <div className="aspect-square overflow-hidden">
            <img
                src={flower.url_flower}
                alt={flower.name}
                className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 text-center">
            <h2 className="text-xl font-bold text-purple-600 mb-2">
              {flower.name}
            </h2>
            <p className="text-black text-sm">
              {flower.message}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            If you want to know meaning{' '}
            <a
                onClick={() => navigate("/system/sign-up")}
                className="text-purple-600 font-medium hover:text-purple-800 transition-colors"
            >
              Signin
            </a>
          </p>
        </div>
      </div>
  );
};

export default SpokenSilenceAccess;
