
import React, { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import SavingsHeader from "@/components/SavingsHeader";
import SavingsGoal from "@/components/SavingsGoal";
import BottomNav from "@/components/BottomNav";
import AddGoalModal from "@/components/AddGoalModal";
import DeleteConfirmationDialog from "@/components/DeleteConfirmationDialog";
import { Button } from "@/components/ui/button";
import { SavingsGoal as SavingsGoalType } from "@/types";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeTab, setActiveTab] = useState("goals");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<SavingsGoalType | null>(null);
  const [deleteGoalId, setDeleteGoalId] = useState<string | null>(null);
  const [goalToDelete, setGoalToDelete] = useState<SavingsGoalType | null>(null);
  const { toast } = useToast();
  
  const [goals, setGoals] = useState<SavingsGoalType[]>([
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

  const handleAddGoal = (goal: SavingsGoalType) => {
    setGoals([...goals, goal]);
  };
  
  const handleEditGoal = (updatedGoal: SavingsGoalType) => {
    setGoals(goals.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal));
    setEditingGoal(null);
    
    toast({
      title: "Goal updated",
      description: `"${updatedGoal.name}" has been updated successfully.`,
    });
  };
  
  const handleEditClick = (goal: SavingsGoalType) => {
    setEditingGoal(goal);
    setIsAddModalOpen(true);
  };
  
  const handleDeleteClick = (goalId: string) => {
    const goal = goals.find(g => g.id === goalId);
    if (goal) {
      setGoalToDelete(goal);
      setDeleteGoalId(goalId);
    }
  };
  
  const handleDeleteConfirm = () => {
    if (deleteGoalId) {
      setGoals(goals.filter(goal => goal.id !== deleteGoalId));
      
      toast({
        title: "Goal deleted",
        description: `"${goalToDelete?.name}" has been deleted successfully.`,
      });
      
      setDeleteGoalId(null);
      setGoalToDelete(null);
    }
  };
  
  const handleDeleteCancel = () => {
    setDeleteGoalId(null);
    setGoalToDelete(null);
  };
  
  const handleModalClose = () => {
    setIsAddModalOpen(false);
    setEditingGoal(null);
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-full bg-app-dark pb-16">
        <SavingsHeader totalSavings={totalSavings} />
        
        <div className="px-4 pt-4">
          {activeTab === "goals" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">My Savings Goals</h2>
                <Button 
                  size="sm" 
                  onClick={() => setIsAddModalOpen(true)}
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
                    onDeleteClick={handleDeleteClick}
                    onEditClick={handleEditClick}
                  />
                ))}
              </div>
              
              {goals.length === 0 && (
                <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                  <div className="w-16 h-16 bg-app-green/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">No savings goals yet</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Start tracking your savings by creating your first goal
                  </p>
                  <Button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-app-green hover:bg-app-green/90 text-white"
                  >
                    Create First Goal
                  </Button>
                </div>
              )}
            </>
          )}
          
          {activeTab === "savings" && (
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
              <h2 className="text-lg font-semibold text-white mb-4">Savings Overview</h2>
              <p className="text-gray-400">Savings analytics and history will appear here</p>
            </div>
          )}
          
          {activeTab === "calendar" && (
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
              <h2 className="text-lg font-semibold text-white mb-4">Savings Plan</h2>
              <p className="text-gray-400">Your savings schedule and goals timeline will appear here</p>
            </div>
          )}
          
          {activeTab === "settings" && (
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
              <h2 className="text-lg font-semibold text-white mb-4">Settings</h2>
              <p className="text-gray-400">App settings and preferences will appear here</p>
            </div>
          )}
        </div>
        
        <AddGoalModal 
          open={isAddModalOpen} 
          onClose={handleModalClose}
          onAddGoal={handleAddGoal}
          editingGoal={editingGoal}
          onEditGoal={handleEditGoal}
        />
        
        <DeleteConfirmationDialog
          open={Boolean(deleteGoalId)}
          goalName={goalToDelete?.name || ""}
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      </div>
      
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </MobileLayout>
  );
};

export default Index;
