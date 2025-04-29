
import React from "react";
import SavingsGoal from "@/components/SavingsGoal";
import { Button } from "@/components/ui/button";
import { SavingsGoal as SavingsGoalType } from "@/types";
import { Plus } from "lucide-react";

interface GoalsListProps {
  goals: SavingsGoalType[];
  onAddGoalClick: () => void;
  onEditClick: (goal: SavingsGoalType) => void;
  onDeleteClick: (goalId: string) => void;
}

const GoalsList: React.FC<GoalsListProps> = ({
  goals,
  onAddGoalClick,
  onEditClick,
  onDeleteClick
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">My Savings Goals</h2>
        <Button 
          size="sm" 
          onClick={onAddGoalClick}
          className="bg-app-green hover:bg-app-green/90 text-white flex items-center gap-1"
        >
          <Plus size={16} />
          <span>Add Goal</span>
        </Button>
      </div>
      
      <div className="space-y-3">
        {goals.map((goal) => (
          <SavingsGoal 
            key={goal.id} 
            goal={goal}
            onDeleteClick={onDeleteClick}
            onEditClick={onEditClick}
          />
        ))}
      </div>
      
      {goals.length === 0 && (
        <EmptyGoalsState onAddGoalClick={onAddGoalClick} />
      )}
    </>
  );
};

const EmptyGoalsState: React.FC<{ onAddGoalClick: () => void }> = ({ onAddGoalClick }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
      <div className="w-16 h-16 bg-app-green/20 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">💰</span>
      </div>
      <h3 className="text-lg font-medium text-white mb-2">No savings goals yet</h3>
      <p className="text-gray-400 text-sm mb-6">
        Start tracking your savings by creating your first goal
      </p>
      <Button 
        onClick={onAddGoalClick}
        className="bg-app-green hover:bg-app-green/90 text-white"
      >
        Create First Goal
      </Button>
    </div>
  );
};

export default GoalsList;
