import axios from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
}

// Fetch all users
export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get("/api/users");
  return response.data;
};

// Add a new user
export const addUser = async (name: string, email: string): Promise<void> => {
  await axios.post("/api/users", { name, email });
};

// Delete a user
export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete("/api/users", { data: { id } });
};
