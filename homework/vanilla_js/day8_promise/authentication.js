export const users = [
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

export const encodePassword = (password) => {
  return password.split("").reverse().join("") + "encoded";
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
};

export const decodePassword = (encrypted) => {
  const decodedString = encrypted.split("").slice(0, -7).reverse().join("");
  return decodedString;
  // const res = encrypted.split("");
  // res.splice(-7, 7);
  // return res.reverse().join("");

  // decode the password
  // for example, "1drowssapencoded" => "password1"
};

export const getUserByEmail = async (email) => {
  // const res = users.filter((item) => item.email === email);
  // if (res.length === 0) {
  //   throw new Error("User not found");
  // } else {
  //   return res[0];
  // }
  const user = users.find((item) => item.email === email);
  if (user) {
    return user;
  } else {
    throw new Error("User not found");
  }

  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }
};

export const verifyPassword = async (password, encrypted) => {
  const encodePassword = await encrypted
    .split("")
    .slice(0, -7)
    .reverse()
    .join("");
  if (password === encodePassword) {
    return true;
  } else {
    throw new Error("Invalid password");
  }
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
};

export const login = async (email, password) => {
  try {
    const user = await getUserByEmail(email);
    const check = await verifyPassword(password, user.password);
    const obj = {
      name: user.name,
      username: user.username,
      email: user.email,
      token: "token",
    };
    return obj;
  } catch (err) {
    return err.message;
  }
  // try {
  //   const user = await getUserByEmail(email);
  //   if (!user) {
  //     throw new Error("User not found");
  //   } else {
  //     const check = await verifyPassword(password, user.password);
  //     if (!check) {
  //       throw new Error("Invalid password");
  //     } else {
  //       const userWithoutPassword = {
  //         name: user.name,
  //         username: user.username,
  //         email: user.email,
  //         token: "token",
  //       };
  //       return userWithoutPassword;
  //     }
  //   }
  // } catch (error) {
  //   return error.message;
  // }
};
// login the user with email and password
// should return the user and token if the login is successful
// e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
// should return the error message if the login is unsuccessful
// e.g. "User not found", "Invalid password"
// };
