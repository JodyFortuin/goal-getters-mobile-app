
import React, { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import SavingsHeader from "@/components/SavingsHeader";
import BottomNav from "@/components/BottomNav";
import AddGoalModal from "@/components/AddGoalModal";
import DeleteConfirmationDialog from "@/components/DeleteConfirmationDialog";
import TabContent from "@/components/TabContent";
import { SavingsGoal as SavingsGoalType } from "@/types";
import { useGoals } from "@/hooks/useGoals";

const Index = () => {
  const [activeTab, setActiveTab] = useState("goals");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<SavingsGoalType | null>(null);
  const [deleteGoalId, setDeleteGoalId] = useState<string | null>(null);
  const [goalToDelete, setGoalToDelete] = useState<SavingsGoalType | null>(null);
  
  const { 
    goals, 
    totalSavings, 
    handleAddGoal, 
    handleEditGoal, 
    handleDeleteGoal 
  } = useGoals();

  const handleEditClick = (goal: SavingsGoalType) => {
    console.log("Edit clicked for goal:", goal.name);
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
    if (deleteGoalId && goalToDelete) {
      handleDeleteGoal(deleteGoalId, goalToDelete.name);
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
          <TabContent
            activeTab={activeTab}
            goals={goals}
            onAddGoalClick={() => setIsAddModalOpen(true)}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
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
