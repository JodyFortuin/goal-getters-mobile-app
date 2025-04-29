
import { useState } from "react";
import { SavingsGoal } from "@/types";
import { useToast } from "@/hooks/use-toast";

export const useGoals = () => {
  const { toast } = useToast();
  
  const [goals, setGoals] = useState<SavingsGoal[]>([
    {
      id: "1",
      name: "Dream Vacation",
      icon: "✈️",
      currentAmount: 2500,
      targetAmount: 5000,
      color: "2196F3",
      dueDate: "Dec 2025",
      monthlyContribution: 250,
    },
    {
      id: "2",
      name: "New MacBook",
      icon: "💻",
      currentAmount: 800,
      targetAmount: 2000,
      color: "9C27B0",
      dueDate: "Aug 2025",
      monthlyContribution: 150,
    },
    {
      id: "3",
      name: "Emergency Fund",
      icon: "💰",
      currentAmount: 3000,
      targetAmount: 5000,
      color: "4CAF50",
      monthlyContribution: 200,
    },
    {
      id: "4",
      name: "New Car",
      icon: "🚗",
      currentAmount: 5000,
      targetAmount: 25000,
      color: "FF9800",
      dueDate: "Jun 2027",
      monthlyContribution: 500,
    },
  ]);

  const totalSavings = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);

  const handleAddGoal = (goal: SavingsGoal) => {
    setGoals([...goals, goal]);
  };
  
  const handleEditGoal = (updatedGoal: SavingsGoal) => {
    setGoals(goals.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal));
    
    toast({
      title: "Goal updated",
      description: `"${updatedGoal.name}" has been updated successfully.`,
    });
  };
  
  const handleDeleteGoal = (goalId: string, goalName: string) => {
    setGoals(goals.filter(goal => goal.id !== goalId));
    
    toast({
      title: "Goal deleted",
      description: `"${goalName}" has been deleted successfully.`,
    });
  };

  return {
    goals,
    totalSavings,
    handleAddGoal,
    handleEditGoal,
    handleDeleteGoal
  };
};
