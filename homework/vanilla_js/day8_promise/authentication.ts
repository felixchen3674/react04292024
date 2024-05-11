interface User {
  name: string;
  username: string;
  email: string;
  password: string;
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
  return password.split("").reverse().join("") + "encoded";
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
};

export const decodePassword = (encrypted: string): string => {
  const decodedString = encrypted.split("").slice(0, -7).reverse().join("");
  return decodedString;
  // const res = encrypted.split("");
  // res.splice(-7, 7);
  // return res.reverse().join("");

  // decode the password
  // for example, "1drowssapencoded" => "password1"
};

export const getUserByEmail = async (email: string): Promise<User> => {
  // const res = users.filter((item) => item.email === email);
  // if (res.length === 0) {
  //   throw new Error("User not found");
  // } else {
  //   return res[0];
  // }
  const user = users.find((item) => item.email === email);
  if (user) {
    return Promise.resolve(user);
  } else {
    throw new Error("User not found");
  }

  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }
};

export const verifyPassword = async (
  password: string,
  encrypted: string
): Promise<boolean> => {
  const encodePassword = encrypted.split("").slice(0, -7).reverse().join("");
  if (password === encodePassword) {
    return Promise.resolve(true);
  } else {
    throw new Error("Invalid password");
  }
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
};

type ReturnObj = {
  name: string;
  username: string;
  email: string;
  token: "token";
};
export const login = async (
  email: string,
  password: string
): Promise<ReturnObj | string> => {
  try {
    const user = await getUserByEmail(email);
    const check = await verifyPassword(password, user.password);

    if (check) {
      const obj: ReturnObj = {
        name: user.name,
        username: user.username,
        email: user.email,
        token: "token",
      };
      return obj;
    } else {
      throw new Error("Invalid password");
    }
  } catch (err: any) {
    return err.message;
  }
};

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

// login the user with email and password
// should return the user and token if the login is successful
// e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
// should return the error message if the login is unsuccessful
// e.g. "User not found", "Invalid password"
// };
