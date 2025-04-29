
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
    <div className="flex items-center p-3.5 bg-app-dark-lighter rounded-xl mb-2.5">
      <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center mr-3">
        <span className="text-base">{goal.icon}</span>
      </div>
      
      <div className="flex-1 mr-3">
        <div className="flex justify-between">
          <h3 className="font-medium text-sm text-white">{goal.name}</h3>
          <span className="text-sm text-white font-semibold">${goal.currentAmount.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center mt-0.5">
          <div className="text-[10px] text-gray-400">
            {goal.category || "Savings Goal"}
            {goal.monthlyContribution && (
              <span className="ml-2 px-1 py-px bg-green-900/30 text-[9px] text-green-500 rounded-sm">
                ${goal.monthlyContribution}/monthly
              </span>
            )}
          </div>
          <span className="text-[10px] text-gray-400">
            of ${goal.targetAmount.toLocaleString()}
          </span>
        </div>
        
        {goal.dueDate && (
          <div className="text-[10px] mt-0.5">
            <span className="px-1 py-px bg-blue-900/30 text-[9px] text-blue-400 rounded-sm">
              Due {goal.dueDate}
            </span>
          </div>
        )}
      </div>
      
      <div className="relative w-11 h-11 flex items-center justify-center">
        <svg width="42" height="42" className="rotate-[-90deg]">
          <circle
            cx="21"
            cy="21"
            r={radius}
            strokeWidth="3.5"
            stroke={`#${goal.color}33`}
            fill="transparent"
            className="progress-circle-bg"
          />
          <circle
            cx="21"
            cy="21"
            r={radius}
            strokeWidth="3.5"
            stroke={`#${goal.color}`}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="progress-circle animate-pulse-glow"
          />
        </svg>
        <span className="absolute text-[10px] font-semibold text-white">
          {formattedProgress}%
        </span>
      </div>
    </div>
  );
};

export default SavingsGoal;
