import { useEffect, useState, useContext } from "react";
import { getAdminDashboard } from "../api/adminApi";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (token) {
      getAdminDashboard(token)
        .then(setData)
        .catch(() => alert("No tienes permisos para ver esta página"));
    }
  }, [token]);

  return (
    <div>
      <h2>Dashboard Admin</h2>
      {data ? <p>{data}</p> : <p>Cargando...</p>}
    </div>
  );
}

export default Dashboard;
