
import React from "react";
import { SavingsGoal as SavingsGoalType, ProgressColor } from "@/types";

interface SavingsGoalProps {
  goal: SavingsGoalType;
}

const SavingsGoal: React.FC<SavingsGoalProps> = ({ goal }) => {
  const progress = Math.min((goal.currentAmount / goal.targetAmount) * 100, 100);
  const formattedProgress = Math.round(progress);
  
  // Calculate circle properties
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <div className="flex items-center p-4 bg-app-dark-lighter rounded-xl mb-3">
      <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-3">
        <span className="text-lg">{goal.icon}</span>
      </div>
      
      <div className="flex-1 mr-4">
        <div className="flex justify-between">
          <h3 className="font-medium text-white">{goal.name}</h3>
          <span className="text-white font-semibold">${goal.currentAmount.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center mt-1">
          <div className="text-xs text-gray-400">
            {goal.category || "Savings Goal"}
            {goal.monthlyContribution && (
              <span className="ml-2 px-1.5 py-0.5 bg-green-900/30 text-green-500 rounded-sm">
                ${goal.monthlyContribution}/monthly
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400">
            of ${goal.targetAmount.toLocaleString()}
          </span>
        </div>
        
        {goal.dueDate && (
          <div className="text-xs mt-1">
            <span className="px-1.5 py-0.5 bg-blue-900/30 text-blue-400 rounded-sm">
              Due {goal.dueDate}
            </span>
          </div>
        )}
      </div>
      
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg width="44" height="44" className="rotate-[-90deg]">
          <circle
            cx="22"
            cy="22"
            r={radius}
            strokeWidth="4"
            stroke={`#${goal.color}33`}
            fill="transparent"
            className="progress-circle-bg"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            strokeWidth="4"
            stroke={`#${goal.color}`}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="progress-circle animate-pulse-glow"
          />
        </svg>
        <span className="absolute text-xs font-semibold text-white">
          {formattedProgress}%
        </span>
      </div>
    </div>
  );
};

export default SavingsGoal;
