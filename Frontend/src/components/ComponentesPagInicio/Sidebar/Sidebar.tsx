import React from 'react';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  onSelectItem: (itemName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectItem }) => {
  const menuItems = [
    {
      title: 'Grupos', subItems: [
        { name: 'Ver Grupos', href: '#' },
        { name: 'Crear Grupo', href: '#' },
        { name: 'Eliminar Grupo', href: '#' },
        { name: 'Modificar Grupo', href: '#' },
      ]
    },
    {
      title: 'Estudiante', subItems: [
        { name: 'Ver Estudiantes', href: '#' },
        { name: 'Asignar Estudiante', href: '#' },
        { name: 'Modificar Estudiante', href: '#' },
      ]
    },
    {
      title: 'Horarios', subItems: [
        { name: 'Ver Horario', href: '#' },
      ]
    },
    {
      title: 'Programacion Salida', subItems: [
        { name: 'Crear Programacion', href: '#' },
        { name: 'Eliminar Programacion', href: '#' },
        { name: 'Modificar Programacion', href: '#' },
        { name: 'Ver Programaciones', href: '#' },
      ]
    },
  ];

  return (
    <aside className="w-60 bg-white border-r p-4">
      <h1 className="font-bold text-lg mb-6">Nombre De La plataforma</h1>
      <nav className="flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            subItems={item.subItems}
            onSelect={onSelectItem}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
