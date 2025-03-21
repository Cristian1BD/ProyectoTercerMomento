import axios from "axios";

const API_URL = "http://localhost:8080/api/admin"; // URL del backend

export const getAdminDashboard = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/dashboard`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener dashboard", error);
    throw error;
  }
};
