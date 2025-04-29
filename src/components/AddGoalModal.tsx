
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SavingsGoal } from "@/types";

interface AddGoalModalProps {
  open: boolean;
  onClose: () => void;
  onAddGoal: (goal: SavingsGoal) => void;
}

const colorOptions = [
  { value: "4CAF50", label: "Green" },
  { value: "2196F3", label: "Blue" },
  { value: "9C27B0", label: "Purple" },
  { value: "FF9800", label: "Orange" },
  { value: "009688", label: "Teal" },
];

const iconOptions = ["💰", "🏠", "🚗", "✈️", "💻", "📱", "👕", "🎓", "🎁"];

const AddGoalModal: React.FC<AddGoalModalProps> = ({ open, onClose, onAddGoal }) => {
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
  const [selectedIcon, setSelectedIcon] = useState(iconOptions[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newGoal: SavingsGoal = {
      id: Date.now().toString(),
      name: goalName,
      icon: selectedIcon,
      currentAmount: parseFloat(currentAmount) || 0,
      targetAmount: parseFloat(targetAmount) || 0,
      color: selectedColor,
      monthlyContribution: parseFloat(monthlyContribution) || undefined,
      dueDate: dueDate || undefined,
    };
    
    onAddGoal(newGoal);
    resetForm();
    onClose();
  };
  
  const resetForm = () => {
    setGoalName("");
    setTargetAmount("");
    setCurrentAmount("");
    setMonthlyContribution("");
    setDueDate("");
    setSelectedColor(colorOptions[0].value);
    setSelectedIcon(iconOptions[0]);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-app-dark-lighter text-white border-gray-800 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white">Add New Savings Goal</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="goalName">Goal Name</Label>
            <Input
              id="goalName"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              placeholder="New Car, Vacation, etc."
              className="bg-gray-800 border-gray-700"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="targetAmount">Target Amount ($)</Label>
              <Input
                id="targetAmount"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                type="number"
                placeholder="5000"
                className="bg-gray-800 border-gray-700"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentAmount">Current Amount ($)</Label>
              <Input
                id="currentAmount"
                value={currentAmount}
                onChange={(e) => setCurrentAmount(e.target.value)}
                type="number"
                placeholder="0"
                className="bg-gray-800 border-gray-700"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
              <Input
                id="monthlyContribution"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                type="number"
                placeholder="100"
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dueDate">Target Date</Label>
              <Input
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="Jun 2025"
                className="bg-gray-800 border-gray-700"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Select Icon</Label>
            <div className="flex flex-wrap gap-2">
              {iconOptions.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  className={`w-10 h-10 text-lg flex items-center justify-center rounded-full ${
                    selectedIcon === icon
                      ? "bg-app-green/20 border-2 border-app-green"
                      : "bg-gray-800"
                  }`}
                  onClick={() => setSelectedIcon(icon)}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Select Color</Label>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  className={`w-10 h-10 rounded-full ${
                    selectedColor === color.value
                      ? "border-2 border-white"
                      : ""
                  }`}
                  style={{ backgroundColor: `#${color.value}` }}
                  onClick={() => setSelectedColor(color.value)}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-2 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-app-green hover:bg-app-green/90 text-white"
            >
              Save Goal
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddGoalModal;
