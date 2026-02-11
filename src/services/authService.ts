import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface User {
  id: number;
  email: string;
  password: string;
}

const users: User[] = [];

export async function register(email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword,
  };

  users.push(newUser);
  return newUser;
}

export async function login(email: string, password: string) {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error("Usuário não encontrado");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error("Senha inválida");

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  return token;
}
