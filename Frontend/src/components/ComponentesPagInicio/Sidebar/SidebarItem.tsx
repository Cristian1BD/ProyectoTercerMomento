import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarItemProps {
  title: string;
  subItems: { name: string; href: string }[];
  onSelect: (name: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, subItems, onSelect }) => {
  const [open, setOpen] = useState(false);


   return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-300 rounded-full" />
          {title}
        </span>
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {open && (
        <ul className="ml-6 mt-2 text-sm text-gray-800">
          {subItems.map((item, index) => (
            <li key={index} className="mt-1 hover:text-blue-600 cursor-pointer" onClick={() => onSelect(item.name)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;
