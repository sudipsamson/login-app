// Simulated JSON database
const users = [
    {
    userID: "u1",
    firstName: "Dejuna",
    lastName: "Rai",
    email: "raidejuna@yahoo.com",
    mobile: "1234567890",
    designation: "Developer",
    userRole: "Admin",
    password: "123456" // In a real app, this would be hashed
  },
  {
    userID: "u1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    mobile: "1234567890",
    designation: "Developer",
    userRole: "user",
    password: "password123" // In a real app, this would be hashed
  },
  {
    userID: "u2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    mobile: "0987654321",
    designation: "Designer",
    userRole: "admin",
    password: "password456" // In a real app, this would be hashed
  }
];

// Simulate reading from JSON
export const getUsers = () => {
  return Promise.resolve(users);
};

// Simulate writing to JSON
export const addUser = (user) => {
  // Check for unique userID and email
  if (users.some(u => u.userID === user.userID)) {
    return Promise.reject(new Error("User ID already exists"));
  }
  if (users.some(u => u.email === user.email)) {
    return Promise.reject(new Error("Email already exists"));
  }
  users.push(user);
  return Promise.resolve({ success: true, message: "User added successfully" });
};