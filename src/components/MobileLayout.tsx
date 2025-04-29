
import React from "react";

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  // Current time for status bar
  const time = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="phone-frame">
        <div className="status-bar">
          <span>{time}</span>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4">
              {/* Signal icon */}
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                <path d="M5 20v-6h3v6h-3zm5 0v-8h3v8h-3zm5 0v-10h3v10h-3zM4 11V4h16v16H4v-9z" />
              </svg>
            </div>
            <div className="w-4 h-4">
              {/* Wifi icon */}
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                <path d="M12 21l-8-9 3-3 5 5 5-5 3 3-8 9z" />
              </svg>
            </div>
            <div className="w-6 h-3 rounded bg-white" />
          </div>
        </div>
        <div className="overflow-y-auto h-[724px]">
          {children}
        </div>
        <div className="home-indicator" />
      </div>
    </div>
  );
};

export default MobileLayout;
