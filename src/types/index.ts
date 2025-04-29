
export interface SavingsGoal {
  id: string;
  name: string;
  icon: string;
  currentAmount: number;
  targetAmount: number;
  color: string;
  dueDate?: string;
  category?: string;
  monthlyContribution?: number;
}

export type ProgressColor = 
  | 'app-green' 
  | 'app-blue' 
  | 'app-purple' 
  | 'app-teal' 
  | 'app-orange' 
  | 'app-yellow'
  | 'app-pink';
