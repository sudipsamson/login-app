import { getUsers, addUser } from './mockDb';
import { v4 as uuidv4 } from 'uuid'; // Add uuid for generating unique userID

export const login = async (email, password) => {
  const users = await getUsers();
  const user = users.find(u => u.email === email && u.password === password); // In a real app, compare hashed passwords
  if (!user) {
    return Promise.reject(new Error("Invalid email or password"));
  }
  return Promise.resolve({ success: true, message: "Login successful", user });
};

export const signup = async (username, email, password) => {
  const users = await getUsers();
  // Generate unique userID
  const userID = `u${uuidv4().split('-')[0]}`;
  const newUser = {
    userID,
    firstName: username.split(' ')[0] || username,
    lastName: username.split(' ')[1] || '',
    email,
    mobile: '', // Placeholder, can be added to form later
    designation: '', // Placeholder, can be added to form later
    userRole: 'user', // Default role
    password // In a real app, hash the password here
  };
  return addUser(newUser);
};