import React from "react";

const Block1 = () => {
  return (
    <div className="bg-blue-500 text-white rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="text-center text-4xl mb-4">🔒</div>
      <h3 className="text-2xl font-bold mb-2">150 Days LeetCode Challenge</h3>
      <p className="text-sm text-white mb-4">All Doors are Closed</p>
      <div className="flex justify-between items-center">
        <span className="font-medium">Active</span>
        <button className="bg-green-500 text-white py-1 px-3 rounded-md">
          Secured
        </button>
      </div>
    </div>
  );
};

export default Block1;
