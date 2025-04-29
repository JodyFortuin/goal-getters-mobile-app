
import React from "react";
import { DollarSign, Calendar, Settings, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: "goals",
      label: "Goals",
      icon: Wallet,
    },
    {
      id: "savings",
      label: "Savings",
      icon: DollarSign,
    },
    {
      id: "calendar",
      label: "Plan",
      icon: Calendar,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-app-dark-lighter border-t border-gray-800 flex justify-around items-center px-4 z-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={cn(
            "flex flex-col items-center justify-center w-16 h-full",
            activeTab === tab.id
              ? "text-app-green"
              : "text-gray-400 hover:text-gray-300"
          )}
          onClick={() => setActiveTab(tab.id)}
        >
          <tab.icon size={16} />
          <span className="text-[9px] mt-1 font-medium tracking-tight">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
