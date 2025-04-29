
import React from "react";
import GoalsList from "./GoalsList";
import { SavingsGoal } from "@/types";

interface TabContentProps {
  activeTab: string;
  goals: SavingsGoal[];
  onAddGoalClick: () => void;
  onEditClick: (goal: SavingsGoal) => void;
  onDeleteClick: (goalId: string) => void;
}

const TabContent: React.FC<TabContentProps> = ({
  activeTab,
  goals,
  onAddGoalClick,
  onEditClick,
  onDeleteClick
}) => {
  if (activeTab === "goals") {
    return (
      <GoalsList 
        goals={goals}
        onAddGoalClick={onAddGoalClick}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />
    );
  }
  
  if (activeTab === "savings") {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <h2 className="text-lg font-semibold text-white mb-4">Savings Overview</h2>
        <p className="text-gray-400">Savings analytics and history will appear here</p>
      </div>
    );
  }
  
  if (activeTab === "calendar") {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <h2 className="text-lg font-semibold text-white mb-4">Savings Plan</h2>
        <p className="text-gray-400">Your savings schedule and goals timeline will appear here</p>
      </div>
    );
  }
  
  if (activeTab === "settings") {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <h2 className="text-lg font-semibold text-white mb-4">Settings</h2>
        <p className="text-gray-400">App settings and preferences will appear here</p>
      </div>
    );
  }
  
  return null;
};

export default TabContent;
