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

export const encodePassword = (password) => {
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
  let encodePassword = '';
  for (let i = password.length - 1; i >= 0; i--) {
    encodePassword += password[i];
  }
  return encodePassword + 'encoded';
};

export const decodePassword = (encrypted) => {
  // decode the password
  // for example, "1drowssapencoded" => "password1"
  const decodePassword = '';
  for (let i = encrypted.length - 1 - 8; i >= 0; i--) {
    decodePassword += encrypted[i];
  }
  return decodePassword;
};

export const getUserByEmail = async (email) => {
  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }
  return new Promise((resovled, rejected) => {
    const user = users.find((user) => user.email === email);
    if (!user) {
      return rejected(new Error('User not found'));
    } else {
      resovled(user);
    }
  });
};

export const verifyPassword = async (password, encrypted) => {
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
};

export const login = async (email, password) => {
  // login the user with email and password
  // should return the user and token if the login is successful
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
  // should return the error message if the login is unsuccessful
  // e.g. "User not found", "Invalid password"
};
