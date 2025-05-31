import React from "react";
import { useNavigate } from "react-router-dom";

const Peekcard = () => {
  const navigate = useNavigate();

  return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full">
          <div className="aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Rose"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 text-center">
            <h2 className="text-xl font-bold text-purple-600 mb-2">
              Rose
            </h2>
            <p className="text-black text-sm">
              You just received a flower!!
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            If you want to know meaning{' '}
            <a 
              onClick={() => navigate("/Signup")}
              className="text-purple-600 font-medium hover:text-purple-800 transition-colors"
            >
              Signin
            </a>
          </p>
        </div>
      </div>
  );
};

export default Peekcard;