interface NavbarProps {
    onChangeTab: (tab: string) => void;
    activeTab: string;
  }
  
  const Navbar: React.FC<NavbarProps> = ({ onChangeTab, activeTab }) => {
    const navItems = ["Inicio", "Idioma", "Soporte", "Contáctanos"];
  
    return (
      <div className="fixed w-full h-16 bg-white shadow-md z-10">
        <div className="max-w-79xl mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center space-x-4 bg-gray-100 rounded-md p-2">
            {navItems.map((item) => {
              const key = item.toLowerCase();
              const isActive = activeTab === key;
  
              return (
                <button
                  key={key}
                  onClick={() => onChangeTab(key)}
                  className={`text-sm px-3 py-1 rounded-md font-medium transition ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-white hover:text-black"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
  
          <div className="flex items-center space-x-3">
            <a href="/datos-estudiantes">
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
                Soy Estudiante
              </button>
            </a>
            <a href="/login">
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
                Inicio de sesión
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
