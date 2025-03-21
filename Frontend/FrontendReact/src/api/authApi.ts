import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // URL del backend

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data; // Retorna el token o mensaje
  } catch (error) {
    console.error("Error en login", error);
    throw error;
  }
};