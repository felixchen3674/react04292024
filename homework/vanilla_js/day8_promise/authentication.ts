export const users = [
  {
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'leanne.graham@email.com',
    password: '1drowssapencoded',
  },
  {
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'ervin.howell@email.com',
    password: '2drowssapencoded',
  },
];
type User = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export const encodePassword = (password: string): string => {
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
  const reversedPassword = password.split('').reverse().join();
  return reversedPassword + 'encoded';
};

export const decodePassword = (encrypted: string): string => {
  // decode the password
  // for example, "1drowssapencoded" => "password1"
  const password = encrypted.split('').reverse().slice(7).join('');
  return password;
};

export const getUserByEmail = async (email: string): Promise<User> => {
  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }
  return new Promise((resovle, reject) => {
    const user = users.find((user) => user.email === email);
    if (!user) {
      return reject(new Error('User not found'));
    } else {
      resovle(user);
    }
  });
};

export const verifyPassword = async (password: string, encrypted: string) => {
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
  const decodedPassword = encrypted.split('').reverse().slice(7).join('');
  if (decodedPassword !== password) {
    throw new Error('Invalid Password');
  }
};

export const login = async (
  email: string,
  password: string
): Promise<
  { name: string; username: string; email: string; token: string } | string
> => {
  try {
    // Find the user by email
    const user = await getUserByEmail(email);

    // Verify the provided password
    await verifyPassword(password, user.password);

    // If everything is correct, return user details with a generated token
    const token = 'some-generated-token'; // Replace with an actual token generator in a real application
    return {
      name: user.name,
      username: user.username,
      email: user.email,
      token,
    };
  } catch (error) {
    // Handle errors gracefully and return appropriate error messages
    if (error instanceof Error) {
      return error.message;
    }
    return 'Unknown error occurred';
  }
};
