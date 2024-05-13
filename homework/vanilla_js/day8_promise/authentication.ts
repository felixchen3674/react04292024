interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  token?: string;
}

export const users: User[] = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

export const encodePassword = (password: string): string => {
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
  return password.split('').reverse().join('')+'encoded'
};

export const decodePassword = (encrypted: string): string => {
  // decode the password
  // for example, "1drowssapencoded" => "password1"
  return encrypted.slice(0, -7).split('').reverse().join('');
};

export const getUserByEmail = async (email: string): Promise<User> => {
  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const verifyPassword = async (password: string, encrypted: string): Promise<void> => {
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
  const decoded = decodePassword(encrypted);
  if (password !== decoded) {
    throw new Error("Invalid password");
  }
};

export const login = async (email: string, password: string): Promise<User | string> => {
  // login the user with email and password
  // should return the user and token if the login is successful
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
  // should return the error message if the login is unsuccessful
  // e.g. "User not found", "Invalid password"
  try {
    const user = await getUserByEmail(email);
    await verifyPassword(password, user.password);
    const { password: _, ...userWithoutPassword } = user;
    //underscore :
    //The underscore (_) is commonly used as a placeholder or a convention to indicate that 
    //a variable is being ignored or its value is not relevant in a particular context. 
    //It's often used in scenarios like destructuring assignments where you want to exclude a specific property.
    //In the context of object destructuring, using _ as a variable name indicates that you're ignoring the value assigned to it.

    // Hash (#):
    // symbol is used in JavaScript as a prefix for private class fields and methods. 
    //It's used to define private members in classes, which are accessible only within the class itself and not from outside the class or its instances.
    return { ...userWithoutPassword, token: "token" } as User;
  } 
  catch (error) {
    return error.message;
  }
};
