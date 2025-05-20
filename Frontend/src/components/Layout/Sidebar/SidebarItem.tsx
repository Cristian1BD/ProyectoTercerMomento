import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SidebarItemProps {
  title: string;
  subItems: { name: string; href: string }[];
  onSelect: (itemName: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, subItems, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left px-4 py-3 rounded hover:bg-blue-700 transition-all"
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      <div className={`ml-4 mt-1 space-y-1 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        {subItems.map((sub, index) => (
          <button
            key={index}
            onClick={() => onSelect(sub.name)}
            className="w-full text-left text-sm px-4 py-2 rounded hover:bg-blue-500 hover:text-white text-blue-100 transition"
          >
            {sub.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidebarItem;
