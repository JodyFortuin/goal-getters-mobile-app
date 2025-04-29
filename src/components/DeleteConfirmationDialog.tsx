
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteConfirmationDialogProps {
  open: boolean;
  goalName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  open,
  goalName,
  onConfirm,
  onCancel
}) => {
  return (
    <AlertDialog open={open} onOpenChange={onCancel}>
      <AlertDialogContent className="bg-app-dark-lighter border-gray-700">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">Delete Savings Goal</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-400 text-sm">
            Are you sure you want to delete your "{goalName}" savings goal? 
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-transparent text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white text-xs"
            onClick={onCancel}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700 text-white text-xs"
            onClick={onConfirm}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmationDialog;
