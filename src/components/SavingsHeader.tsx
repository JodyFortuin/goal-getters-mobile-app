
import React from "react";
import { Settings } from "lucide-react";

interface SavingsHeaderProps {
  totalSavings: number;
}

const SavingsHeader: React.FC<SavingsHeaderProps> = ({ totalSavings }) => {
  // Current date
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="px-4 pt-4 pb-6 bg-app-dark">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="bg-app-green/20 w-7 h-7 rounded-md flex items-center justify-center mr-2">
            <span className="text-app-green font-bold">$</span>
          </div>
          <h1 className="text-lg font-semibold text-white">GoalGetters</h1>
          <div className="ml-2 px-2 py-0.5 bg-amber-500/20 rounded-md">
            <span className="text-[9px] text-amber-500 font-medium">Pro</span>
          </div>
        </div>
        <button className="p-2">
          <Settings size={18} className="text-gray-300" />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-gray-400 text-xs">Savings Manager</h2>
          <p className="text-[10px] text-gray-500">{currentDate}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-white">${totalSavings.toLocaleString()}</p>
          <p className="text-[10px] text-gray-400">Total Savings</p>
        </div>
      </div>
    </div>
  );
};

export default SavingsHeader;
